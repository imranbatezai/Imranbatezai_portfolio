import { NextRequest, NextResponse } from "next/server";
import { hasErrors, validateContactForm } from "@/lib/validation";
import type { ContactFormData } from "@/types";

export const runtime = "nodejs";

// Best-effort, in-memory per-instance rate limiter. Serverless functions are
// stateless between cold starts, so this is a lightweight deterrent — not a
// substitute for a dedicated rate-limiting service — but it costs nothing
// and blocks naive spam scripts.
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  submissions.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function sanitize(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again in a minute.",
        },
        { status: 429 }
      );
    }

    const body = (await request.json()) as Partial<ContactFormData> & {
      company?: string;
    };

    // Honeypot: a real visitor never sees or fills this field. If it's
    // filled, report success anyway so bots don't learn the field is
    // being checked, but drop the submission.
    if (body.company && body.company.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Thank you — your message has been received.",
      });
    }

    const errors = validateContactForm(body);
    if (hasErrors(errors)) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const payload = {
      name: sanitize(body.name as string),
      email: sanitize(body.email as string),
      subject: sanitize(body.subject as string),
      message: sanitize(body.message as string),
      receivedAt: new Date().toISOString(),
    };

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (resendApiKey && toEmail && fromEmail) {
      // Free-tier-friendly transactional email via Resend's REST API — no
      // SDK dependency required. Swap this block for any other provider by
      // changing the fetch target and payload shape; nothing else in the
      // route needs to change.
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: toEmail,
          reply_to: payload.email,
          subject: `Portfolio contact: ${payload.subject}`,
          text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
        }),
      });

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        console.error("Email provider error:", errorText);
        return NextResponse.json(
          {
            success: false,
            message:
              "Your message was received but the notification email failed to send. Please try again later or email directly.",
          },
          { status: 502 }
        );
      }
    } else {
      // No email provider configured yet — log the submission so it is at
      // least visible in the Vercel function logs. See .env.example and the
      // README for how to connect a free provider (Resend) when you're
      // ready to receive real emails.
      console.log(
        "Contact form submission (no email provider configured):",
        payload
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you — your message has been received.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
