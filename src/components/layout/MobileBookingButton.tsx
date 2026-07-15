'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function MobileBookingButton() {
  const pathname = usePathname();

  // Hide on booking page and admin
  if (pathname === '/book' || pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-pink/20 bg-midnight/95 p-3 backdrop-blur-xl lg:hidden">
      <Link
        href="/book"
        className="btn-primary flex w-full items-center justify-center gap-2 text-sm"
      >
        <Calendar className="h-4 w-4" />
        Book Match Officials
      </Link>
    </div>
  );
}
