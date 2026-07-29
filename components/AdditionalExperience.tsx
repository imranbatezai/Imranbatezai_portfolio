"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { additionalExperience } from "@/lib/data";

export default function AdditionalExperience() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4 border-t border-white/10 pt-10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span>
          <span className="font-display text-lg font-medium text-white">
            Additional Professional Experience
          </span>
          <span className="ml-3 font-mono text-xs text-white/40">
            {additionalExperience.length} roles across surveys, field
            coordination &amp; education
          </span>
        </span>
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/15 text-white/70 transition-transform duration-300">
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {additionalExperience.map((role) => (
                <li
                  key={`${role.title}-${role.organization}`}
                  className="border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <p className="text-sm font-medium text-white">{role.title}</p>
                  <p className="mt-0.5 text-xs text-white/50">{role.organization}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
