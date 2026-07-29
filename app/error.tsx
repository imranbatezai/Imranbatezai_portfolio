"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-light">
        Something went wrong
      </p>
      <h1 className="mt-4 max-w-md font-display text-2xl font-medium text-white sm:text-3xl">
        The page hit an unexpected error.
      </h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 bg-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-light"
      >
        <RotateCcw className="h-4 w-4" />
        Try again
      </button>
    </section>
  );
}
