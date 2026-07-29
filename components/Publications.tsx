import { ExternalLink, FileText } from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <section id="publications" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Publications"
          title="Peer-reviewed research on out-of-school children & ALPs"
          description="Four publications examining Accelerated Learning Programs, education access, and the barriers that keep children out of formal schooling."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {publications.map((pub, i) => (
            <RevealOnScroll key={pub.citation} delay={(i % 2) * 0.08}>
              <div className="flex h-full flex-col border border-line bg-paper p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-wide text-teal">
                    {pub.year}
                  </span>
                  <FileText className="h-4 w-4 text-slate-light" strokeWidth={1.75} />
                </div>
                <p className="mt-4 font-display text-lg font-medium leading-snug text-navy">
                  {pub.citation}
                </p>
                <p className="mt-3 text-sm italic text-slate">{pub.journal}</p>

                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 border border-teal/30 px-3.5 py-2 text-xs font-medium uppercase tracking-wide text-teal transition-colors hover:bg-teal hover:text-white"
                  >
                    View DOI
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
