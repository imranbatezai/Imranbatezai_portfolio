import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";

const stages = [
  {
    label: "Field",
    caption: "Household surveys & field data collection",
  },
  {
    label: "Analysis",
    caption: "Quantitative & qualitative synthesis",
  },
  {
    label: "Evidence",
    caption: "Reports policymakers can act on",
  },
];

export default function DataVisualization() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-[0.12]"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="From Field to Evidence"
          title="A workflow built on data, not assumptions"
          light
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Field */}
          <RevealOnScroll delay={0}>
            <div className="border border-white/10 bg-white/[0.03] p-7">
              <svg viewBox="0 0 200 140" className="h-32 w-full" aria-hidden="true">
                <rect x="4" y="4" width="192" height="132" fill="none" stroke="#ffffff" strokeOpacity="0.12" />
                {Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 7 }).map((__, c) => (
                    <circle
                      key={`${r}-${c}`}
                      cx={20 + c * 27}
                      cy={20 + r * 25}
                      r="1.4"
                      fill="#ffffff"
                      fillOpacity="0.14"
                    />
                  ))
                )}
                <path
                  d="M40 100 L80 55 L120 85 L165 35"
                  fill="none"
                  stroke="#1C9C93"
                  strokeWidth="1.4"
                  strokeDasharray="4 4"
                />
                {[
                  [40, 100],
                  [80, 55],
                  [120, 85],
                  [165, 35],
                ].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" fill="#0B1E33" stroke="#1C9C93" strokeWidth="2" />
                ))}
              </svg>
            </div>
          </RevealOnScroll>

          {/* Analysis */}
          <RevealOnScroll delay={0.1}>
            <div className="border border-white/10 bg-white/[0.03] p-7">
              <svg viewBox="0 0 200 140" className="h-32 w-full" aria-hidden="true">
                <line x1="20" y1="120" x2="185" y2="120" stroke="#ffffff" strokeOpacity="0.18" />
                <line x1="20" y1="20" x2="20" y2="120" stroke="#ffffff" strokeOpacity="0.18" />
                {[38, 58, 40, 70, 52, 85, 60].map((h, i) => (
                  <rect
                    key={i}
                    x={32 + i * 21}
                    y={120 - h}
                    width="12"
                    height={h}
                    fill={i === 5 ? "#1C9C93" : "#ffffff"}
                    fillOpacity={i === 5 ? 0.9 : 0.14}
                  />
                ))}
              </svg>
            </div>
          </RevealOnScroll>

          {/* Evidence */}
          <RevealOnScroll delay={0.2}>
            <div className="border border-white/10 bg-white/[0.03] p-7">
              <svg viewBox="0 0 200 140" className="h-32 w-full" aria-hidden="true">
                <rect x="55" y="14" width="90" height="112" fill="none" stroke="#ffffff" strokeOpacity="0.18" />
                {[30, 42, 54, 66, 78].map((y, i) => (
                  <line
                    key={y}
                    x1="68"
                    y1={y}
                    x2={i === 2 ? 118 : 132}
                    y2={y}
                    stroke="#ffffff"
                    strokeOpacity="0.22"
                  />
                ))}
                <circle cx="100" cy="100" r="16" fill="none" stroke="#1C9C93" strokeWidth="2" />
                <path d="M93 100 L98 105 L109 92" fill="none" stroke="#1C9C93" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stages.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-light">
                {s.label}
              </p>
              <p className="mt-1.5 text-sm text-white/60">{s.caption}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
