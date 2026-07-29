import { CheckCircle2 } from "lucide-react";
import RevealOnScroll from "./ui/RevealOnScroll";
import { coreSkills } from "@/lib/data";

export default function CoreSkills() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
        Core Professional Skills
      </p>
      <ul className="mt-6 space-y-3">
        {coreSkills.map((skill, i) => (
          <RevealOnScroll key={skill} delay={i * 0.03}>
            <li className="flex items-start gap-2.5 text-sm text-charcoal">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-teal" strokeWidth={1.75} />
              {skill}
            </li>
          </RevealOnScroll>
        ))}
      </ul>
    </div>
  );
}
