import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';
import { getAllGalleryItems } from '@/content/gallery';
import { Camera } from 'lucide-react';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Gallery',
  description: 'Photos and videos from our recent rugby officiating assignments.',
});

export default function GalleryPage() {
  const items = getAllGalleryItems();

  return (
    <div className="py-20">
      <div className="container-wide">
        <Breadcrumbs items={[{ label: 'Gallery' }]} />
        
        <div className="mt-12 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            Gallery
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:mx-0 mx-auto">
            Action shots and behind-the-scenes moments from our referee network across the UK.
          </p>
        </div>

        {items.length > 0 ? (
          <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Gallery grid would go here when we have real images */}
            {items.map((item) => (
              <div key={item.id} className="relative aspect-square overflow-hidden rounded-xl bg-navy/30">
                 {/* Placeholder for actual image component */}
                 <div className="absolute inset-0 flex items-center justify-center border border-white/5">
                    <span className="text-sm text-gray-500">{item.alt}</span>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-white/5 bg-navy/30 p-16 text-center">
            <Camera className="mx-auto h-16 w-16 text-gray-600" />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white">
              Gallery Updating Soon
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-400">
              We are currently compiling photos from our recent tournaments and fixtures. Check back soon for match action and team photos.
            </p>
            <div className="mt-8">
              <Link href="/events" className="btn-secondary">
                View Upcoming Events
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
