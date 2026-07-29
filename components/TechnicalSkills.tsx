import RevealOnScroll from "./ui/RevealOnScroll";
import { technicalSkills } from "@/lib/data";

const LEVEL_SEGMENTS: Record<string, number> = {
  Advanced: 4,
  Proficient: 3,
};

export default function TechnicalSkills() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
        Software &amp; Technical Skills
      </p>
      <div className="mt-6 space-y-5">
        {technicalSkills.map((skill, i) => {
          const filled = LEVEL_SEGMENTS[skill.level] ?? 2;
          return (
            <RevealOnScroll key={skill.name} delay={i * 0.04}>
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-navy">{skill.name}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-slate">
                    {skill.level}
                  </span>
                </div>
                <div className="mt-2 flex gap-1.5">
                  {Array.from({ length: 4 }).map((_, seg) => (
                    <span
                      key={seg}
                      className={`h-1.5 flex-1 ${
                        seg < filled ? "bg-teal" : "bg-line"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}
