"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Container from "./ui/Container";
import RevealOnScroll from "./ui/RevealOnScroll";
import SectionHeading from "./ui/SectionHeading";
import { workshops } from "@/lib/data";

const CATEGORY_FILTERS = ["All", ...workshops.map((w) => w.category)];

export default function Workshops() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return workshops
      .filter((w) => category === "All" || w.category === category)
      .map((w) => ({
        ...w,
        items: w.items.filter((item) => item.toLowerCase().includes(q)),
      }))
      .filter((w) => w.items.length > 0);
  }, [query, category]);

  const totalCount = workshops.reduce((sum, w) => sum + w.items.length, 0);

  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Workshops & Trainings"
          title="Continuous, cross-sector capacity building"
          description={`${totalCount}+ trainings across education, public health and cross-sector programming. Search or filter by category.`}
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-light" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search trainings…"
              aria-label="Search workshops and trainings"
              className="w-full border border-line bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal placeholder:text-slate-light focus:border-teal focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`border px-3.5 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
                  category === cat
                    ? "border-teal bg-teal text-white"
                    : "border-line bg-white text-slate hover:border-teal/40 hover:text-teal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {filtered.length === 0 && (
            <p className="text-sm text-slate">No trainings match your search.</p>
          )}
          {filtered.map((group) => (
            <RevealOnScroll key={group.category}>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-line bg-white px-3 py-1.5 text-sm text-charcoal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
