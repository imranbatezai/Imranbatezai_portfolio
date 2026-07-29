import { Award, Trophy } from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  const prominent = achievements.find((a) => a.prominent);
  const rest = achievements.filter((a) => !a.prominent);

  return (
    <section id="achievements" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Achievements" title="Recognition along the way" />

        <div className="mt-14 space-y-5">
          {prominent && (
            <RevealOnScroll>
              <div className="relative overflow-hidden border border-teal/30 bg-navy p-8 sm:p-10">
                <div
                  className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-[0.15]"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-teal-light/50 bg-teal/15">
                      <Trophy className="h-5 w-5 text-teal-light" />
                    </span>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-light">
                        Research Grant
                      </p>
                      <h3 className="mt-2 max-w-xl font-display text-xl font-medium leading-snug text-white sm:text-2xl">
                        {prominent.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                        {prominent.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-none rounded-sm border border-white/15 bg-white/[0.05] px-5 py-4 text-center">
                    <p className="font-mono text-2xl font-medium text-white">USD 1,000</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
                      Grant Award
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {rest.map((a, i) => (
              <RevealOnScroll key={a.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 border border-line bg-paper p-6">
                  <Award className="h-5 w-5 flex-none text-teal" strokeWidth={1.75} />
                  <div>
                    <h3 className="font-display text-base font-medium leading-snug text-navy">
                      {a.title}
                    </h3>
                    {a.description && (
                      <p className="mt-1.5 text-sm text-slate">{a.description}</p>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
