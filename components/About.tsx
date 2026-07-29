import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { aboutAreas, aboutTags } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Field evidence, translated into decisions"
            />
          </div>

          <div>
            <RevealOnScroll delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-slate">
                <p>
                  Imran Khan Batezai is an analytical and results-driven
                  researcher whose work spans education research, public
                  health monitoring, and monitoring &amp; evaluation. His
                  experience covers the full research pipeline: field data
                  management, quantitative and qualitative analysis, survey
                  management, research synthesis, data visualization, and
                  evidence-based reporting.
                </p>
                <p>
                  Across public health programmes and education-sector
                  research alike, he works closely with{" "}
                  <span className="text-charcoal">
                    policymakers, government counterparts, donor
                    stakeholders, NGOs, development organizations, research
                    institutions, and field teams
                  </span>
                  , coordinating between the people who collect data and the
                  people who need to act on it.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.18} className="mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
                Areas of Work
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {aboutAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-sm border border-line bg-white px-3 py-1.5 text-sm text-charcoal"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.24} className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
                Works Closely With
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm bg-teal-soft px-3 py-1.5 text-sm text-teal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
