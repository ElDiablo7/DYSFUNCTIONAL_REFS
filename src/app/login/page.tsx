'use client';

import { useActionState } from 'react';
import { authenticate } from './actions';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn-primary mt-6 w-full ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {pending ? 'Signing in...' : 'Sign In'}
    </button>
  );
}

export default function LoginPage() {
  const [errorMessage, dispatch] = useActionState(authenticate, undefined);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-4">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-gold/20 bg-navy/50 p-8 shadow-2xl backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to your referee or admin account.
          </p>
        </div>

        <form action={dispatch} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 block w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-white placeholder-gray-500 focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
              placeholder="Enter your username"
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
              placeholder="••••••••"
            />
          </div>

          <div className="flex h-6 items-end space-x-1" aria-live="polite" aria-atomic="true">
            {errorMessage && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}
          </div>

          <LoginButton />
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <Link href="/" className="hover:text-pink transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
