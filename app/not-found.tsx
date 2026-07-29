import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-6 py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid opacity-30"
        aria-hidden="true"
      />
      <div className="relative text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-teal-light">
          404 &middot; Not Found
        </p>
        <h1 className="mt-5 font-display text-4xl font-medium text-white sm:text-5xl">
          This page isn&apos;t on the record.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Head back to the homepage to find what you need.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-light"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
