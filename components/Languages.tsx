import RevealOnScroll from "./ui/RevealOnScroll";
import { languages } from "@/lib/data";

const LEVEL_DOTS: Record<string, number> = {
  Excellent: 4,
  "Reading/Writing": 2,
};

export default function Languages() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
        Languages
      </p>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
        {languages.map((lang, i) => {
          const filled = LEVEL_DOTS[lang.level] ?? 2;
          return (
            <RevealOnScroll key={lang.name} delay={i * 0.03}>
              <div>
                <p className="text-sm font-medium text-navy">{lang.name}</p>
                <p className="mt-0.5 text-xs text-slate">{lang.level}</p>
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: 4 }).map((_, dot) => (
                    <span
                      key={dot}
                      className={`h-1.5 w-1.5 rounded-full ${
                        dot < filled ? "bg-teal" : "bg-line"
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
