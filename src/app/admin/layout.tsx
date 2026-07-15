import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-midnight">
      <header className="border-b border-white/5 bg-navy/30">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider text-white">
              <span className="text-pink">Dysfunctional</span>{' '}
              <span className="text-metallic-gold">Admin</span>
            </span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
        </div>
      </header>
      
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
