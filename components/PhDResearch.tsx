import { BookOpen, FlaskConical, Landmark } from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import { phdResearch } from "@/lib/data";

export default function PhDResearch() {
  return (
    <section id="research" className="bg-paper py-24 sm:py-28">
      <Container>
        <RevealOnScroll>
          <div className="relative overflow-hidden border border-navy/10 bg-navy p-8 sm:p-12 lg:p-16">
            <div
              className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-[0.18]"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-teal-light">
                <BookOpen className="h-4 w-4" />
                {phdResearch.title}
              </p>

              <blockquote className="mt-6 max-w-3xl font-display text-2xl italic leading-snug text-white text-balance sm:text-3xl lg:text-[2.15rem]">
                &ldquo;{phdResearch.researchTitle}&rdquo;
              </blockquote>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wide text-white/50">
                <span className="flex items-center gap-2">
                  <Landmark className="h-3.5 w-3.5 text-teal-light" />
                  {phdResearch.institution}
                </span>
                <span className="flex items-center gap-2">
                  <FlaskConical className="h-3.5 w-3.5 text-teal-light" />
                  {phdResearch.method}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {phdResearch.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-sm border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-white/75"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
