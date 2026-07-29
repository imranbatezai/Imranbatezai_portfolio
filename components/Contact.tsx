"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { site } from "@/lib/data";
import { hasErrors, validateContactForm } from "@/lib/validation";
import type { ContactFormData, ValidationErrors } from "@/types";

type Status = "idle" | "loading" | "success" | "error";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(field: keyof ContactFormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (field !== "company" && errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validateContactForm(form);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Please try again.");
        if (data.errors) setErrors(data.errors);
        return;
      }

      setStatus("success");
      setFeedback(data.message || "Thank you — your message has been received.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  }

  const inputClass = (field: keyof ValidationErrors) =>
    `mt-2 w-full border bg-paper px-3.5 py-2.5 text-sm text-charcoal placeholder:text-slate-light focus:outline-none focus:border-teal ${
      errors[field] ? "border-red-400" : "border-line"
    }`;

  return (
    <section id="contact" className="bg-navy py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's connect"
              light
              description="Open to research collaboration, consultancy, monitoring & evaluation roles, and education-sector or development partnerships."
            />

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center border border-white/15">
                  <Mail className="h-4 w-4 text-teal-light" />
                </span>
                {site.email}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center border border-white/15">
                  <Phone className="h-4 w-4 text-teal-light" />
                </span>
                {site.phone}
              </a>
              <p className="flex items-center gap-3 text-sm text-white/75">
                <span className="flex h-9 w-9 flex-none items-center justify-center border border-white/15">
                  <MapPin className="h-4 w-4 text-teal-light" />
                </span>
                {site.location}
              </p>
            </div>
          </div>

          <RevealOnScroll delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative border border-white/10 bg-white p-6 sm:p-8"
            >
              {/* Honeypot field — hidden from real visitors, left blank by them.
                  Bots that auto-fill every field will trip this and their
                  submission is silently discarded server-side. */}
              <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-wide text-slate"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputClass("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-wide text-slate"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium uppercase tracking-wide text-slate"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className={inputClass("subject")}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wide text-slate"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={inputClass("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              <div role="status" aria-live="polite">
                {status === "success" && (
                  <p className="mt-4 flex items-start gap-2 text-sm text-teal">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                    {feedback}
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 flex items-start gap-2 text-sm text-red-500">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
                    {feedback}
                  </p>
                )}
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
