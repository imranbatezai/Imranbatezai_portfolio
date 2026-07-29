import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <RevealOnScroll>
      <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
        <div className="flex items-center gap-3">
          {align === "center" ? (
            <span
              className={`mx-auto block h-px w-10 ${
                light ? "bg-white/30" : "bg-teal/40"
              }`}
            />
          ) : (
            <span
              className={`block h-px w-10 ${light ? "bg-white/30" : "bg-teal/40"}`}
            />
          )}
        </div>
        <p
          className={`mt-4 font-mono text-xs uppercase tracking-[0.28em] ${
            light ? "text-white/60" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-balance ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 text-base leading-relaxed ${
              light ? "text-white/70" : "text-slate"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </RevealOnScroll>
  );
}
