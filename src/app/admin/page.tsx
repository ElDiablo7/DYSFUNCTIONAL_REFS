import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Admin Dashboard',
  description: 'Administration area for The Dysfunctional Referees.',
  noIndex: true,
});

export default function AdminPage() {
  // If no admin email is configured, show setup instructions
  if (!process.env.ADMIN_EMAIL) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-gold/20 bg-navy/30 p-10 text-center shadow-2xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white">
          Admin Setup Required
        </h1>
        <p className="mt-4 text-gray-400">
          The administration area is not yet configured. To enable this section,
          you must set the following environment variables:
        </p>
        <ul className="mt-6 space-y-2 text-sm text-gray-300">
          <li className="rounded bg-black/20 px-3 py-2 font-mono text-pink">ADMIN_EMAIL</li>
          <li className="rounded bg-black/20 px-3 py-2 font-mono text-pink">ADMIN_PASSWORD_HASH</li>
          <li className="rounded bg-black/20 px-3 py-2 font-mono text-pink">DATABASE_URL</li>
        </ul>
        <div className="mt-10">
          <Link href="/" className="btn-secondary">
            Return to Public Site
          </Link>
        </div>
      </div>
    );
  }

  // Placeholder for the actual admin login form when configured
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-navy/50 p-8 shadow-2xl">
      <div className="mb-8 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white">
          Admin Sign In
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Sign in to manage referees, events, and bookings.
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-white placeholder-gray-500 focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
            placeholder="admin@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-white placeholder-gray-500 focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
          />
        </div>

        <button
          type="button"
          disabled
          className="btn-primary mt-6 w-full opacity-50 cursor-not-allowed"
        >
          Sign In (Disabled)
        </button>
        <p className="mt-4 text-center text-xs text-gray-500">
          Database connection required for authentication.
        </p>
      </form>
    </div>
  );
}
