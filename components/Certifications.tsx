import { BadgeCheck } from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Professional certifications" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={cert.name} delay={i * 0.06}>
              <div className="h-full border border-line bg-white p-6">
                <BadgeCheck className="h-6 w-6 text-teal" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-lg font-medium text-navy">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-slate">{cert.issuer}</p>
                <p className="mt-4 inline-block rounded-sm bg-teal-soft px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-teal">
                  {cert.grade}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
