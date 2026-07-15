export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-20">
      <div className="relative h-16 w-16">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gold/20" />
        {/* Spinning ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-pink border-r-pink" />
        {/* Inner dot */}
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-bright" />
      </div>
      <p className="mt-6 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-widest text-gray-400 animate-pulse">
        Loading...
      </p>
    </div>
  );
}
