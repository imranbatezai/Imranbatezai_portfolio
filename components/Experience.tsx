import { Calendar, MapPin } from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "@/lib/data";
import AdditionalExperience from "./AdditionalExperience";

export default function Experience() {
  return (
    <section id="experience" className="bg-navy py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="A decade in the field, one ledger line at a time"
          light
          description="From house-to-house surveys to national eradication-programme reporting — tracked here in sequence, like entries in a field notebook."
        />

        <ol className="mt-16 space-y-0">
          {experience.map((role, i) => (
            <li key={`${role.title}-${role.dates}`} className="flex gap-5 sm:gap-7">
              <div className="flex w-3 flex-none flex-col items-center">
                <span
                  className={`ledger-node ${role.current ? "ledger-node--filled" : ""}`}
                  aria-hidden="true"
                />
                {i !== experience.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mt-1 w-0 flex-1 border-l-2 border-dashed border-white/20"
                  />
                )}
              </div>

              <RevealOnScroll className="min-w-0 flex-1 pb-14" delay={i * 0.05}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wide text-teal-light">
                  <Calendar className="h-3.5 w-3.5" />
                  {role.dates}
                  {role.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-sm bg-teal/20 px-2 py-0.5 text-[10px] text-teal-light">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-light" />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-display text-xl font-medium text-white sm:text-2xl">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  {role.organization}
                  {role.location && (
                    <span className="ml-2 inline-flex items-center gap-1 text-white/45">
                      <MapPin className="h-3 w-3" />
                      {role.location}
                    </span>
                  )}
                </p>

                {role.summary && (
                  <p className="mt-3 max-w-2xl font-display text-base italic leading-relaxed text-white/75">
                    {role.summary}
                  </p>
                )}

                <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                  {role.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-white/65">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-teal-light/70" />
                      {r}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </li>
          ))}
        </ol>

        <AdditionalExperience />
      </Container>
    </section>
  );
}
