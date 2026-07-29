"use client";

import { useEffect, useMemo, useRef } from "react";
import { animate, useInView } from "framer-motion";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import { highlights } from "@/lib/data";

function parseValue(raw: string) {
  const match = raw.match(/^([\d,]+)(\+?)$/);
  if (!match) return null;
  const number = parseInt(match[1].replace(/,/g, ""), 10);
  return { number, suffix: match[2], hasComma: match[1].includes(",") };
}

function StatNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    if (!inView || !parsed || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, parsed.number, {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        const rounded = Math.round(latest);
        node.textContent = parsed.hasComma
          ? rounded.toLocaleString("en-US")
          : String(rounded);
      },
      onComplete() {
        node.textContent =
          (parsed.hasComma
            ? parsed.number.toLocaleString("en-US")
            : String(parsed.number)) + parsed.suffix;
      },
    });
    return () => controls.stop();
  }, [inView, parsed]);

  if (!parsed) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>0{parsed.suffix}</span>;
}

export default function Highlights() {
  return (
    <section className="border-y border-line bg-white py-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {highlights.map((h, i) => (
            <RevealOnScroll key={h.label} delay={i * 0.04}>
              <div className="border-l-2 border-teal/30 pl-4">
                <p className="font-mono text-3xl font-medium text-navy sm:text-4xl">
                  <StatNumber value={h.value} />
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-wide text-slate leading-snug">
                  {h.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
