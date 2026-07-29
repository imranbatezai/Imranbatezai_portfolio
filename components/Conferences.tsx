import { CalendarDays, MapPin } from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { conferences } from "@/lib/data";

export default function Conferences() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Conference Presentations"
          title="Presenting research to the field it studies"
        />

        <div className="mt-14 space-y-5">
          {conferences.map((conf, i) => (
            <RevealOnScroll key={conf.title} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-4 border-l-2 border-teal/40 bg-white p-6 sm:grid-cols-[80px_1fr] sm:p-7">
                <span className="font-mono text-2xl font-medium text-navy/25 sm:text-3xl">
                  {conf.year}
                </span>
                <div>
                  <p className="font-display text-lg italic leading-snug text-navy sm:text-xl">
                    &ldquo;{conf.title}&rdquo;
                  </p>
                  <p className="mt-2.5 text-sm text-slate">{conf.event}</p>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 font-mono text-xs uppercase tracking-wide text-slate-light">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {conf.venue}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {conf.dates}
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
