import { Award, MapPin } from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic record"
          description="From secondary school in Quetta through to doctoral research at the University of Peshawar."
        />

        <ol className="mt-16 space-y-0">
          {education.map((ed, i) => (
            <li key={`${ed.degree}-${ed.institution}`} className="flex gap-5 sm:gap-7">
              <div className="flex w-3 flex-none flex-col items-center">
                <span
                  className={`ledger-node ${i === 0 ? "ledger-node--filled" : ""}`}
                  aria-hidden="true"
                />
                {i !== education.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mt-1 w-0 flex-1 border-l-2 border-dashed border-line"
                  />
                )}
              </div>

              <RevealOnScroll className="min-w-0 flex-1 pb-10" delay={i * 0.04}>
                <div className="flex flex-wrap items-start justify-between gap-3 border border-line bg-paper p-5 sm:p-6">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-medium text-navy sm:text-xl">
                      {ed.degree}
                    </h3>
                    <p className="mt-1 text-sm text-slate">
                      {ed.institution}
                      {ed.location && (
                        <span className="ml-2 inline-flex items-center gap-1 text-slate-light">
                          <MapPin className="h-3 w-3" />
                          {ed.location}
                        </span>
                      )}
                    </p>
                    {ed.focus && (
                      <p className="mt-2 text-sm text-slate">
                        <span className="text-charcoal">Focus:</span> {ed.focus}
                      </p>
                    )}
                    {ed.highlight && (
                      <p className="mt-3 inline-flex items-center gap-1.5 rounded-sm bg-teal-soft px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-teal">
                        <Award className="h-3.5 w-3.5" />
                        {ed.highlight}
                      </p>
                    )}
                  </div>

                  {(ed.status || ed.score) && (
                    <div className="flex-none font-mono text-xs uppercase tracking-wide text-navy/70 sm:text-right">
                      {ed.status && <p className="max-w-[220px]">{ed.status}</p>}
                      {ed.score && <p className="mt-1 font-medium text-teal">{ed.score}</p>}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
