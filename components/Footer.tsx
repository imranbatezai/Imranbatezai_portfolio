import Container from "./ui/Container";
import { navLinks, site } from "@/lib/data";

const quickLinks = navLinks.filter((l) =>
  ["About", "Experience", "Education", "Research", "Publications", "Contact"].includes(
    l.label
  )
);

export default function Footer() {
  return (
    <footer className="bg-navy-deep py-14">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-medium text-white">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-white/50">
              Ph.D. Scholar in Education &middot; Research Analyst &middot; Data
              Analyst &middot; Monitoring &amp; Evaluation
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Quick Links
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-teal-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/35">
            © 2026 Imran Khan Batezai. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
