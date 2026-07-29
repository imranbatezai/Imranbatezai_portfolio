import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import TechnicalSkills from "./TechnicalSkills";
import CoreSkills from "./CoreSkills";
import Languages from "./Languages";

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools, competencies & languages"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <TechnicalSkills />
          <CoreSkills />
          <Languages />
        </div>
      </Container>
    </section>
  );
}
