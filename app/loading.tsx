export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy">
      <div className="flex items-center gap-3 text-white/60">
        <span className="h-2 w-2 animate-pulse rounded-full bg-teal-light" />
        <span className="font-mono text-xs uppercase tracking-[0.25em]">
          Loading
        </span>
      </div>
    </div>
  );
}
