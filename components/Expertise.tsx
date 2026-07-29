import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { expertise } from "@/lib/data";

export default function Expertise() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Core Expertise"
          title="A research toolkit built for the field and the report"
          align="center"
          description="Twelve capabilities that carry a project from the first household survey to the final policy brief."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon =
              (Icons as unknown as Record<string, LucideIcon>)[item.icon] ??
              Icons.Circle;
            return (
              <RevealOnScroll key={item.title} delay={(i % 3) * 0.06}>
                <div className="group h-full border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_16px_40px_-24px_rgba(11,30,51,0.35)]">
                  <div className="h-0.5 w-8 bg-teal/40 transition-all duration-300 group-hover:w-14 group-hover:bg-teal" />
                  <Icon className="mt-5 h-6 w-6 text-teal" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-lg font-medium text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
