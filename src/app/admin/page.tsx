import { generatePageMetadata } from '@/lib/seo';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

export const metadata = generatePageMetadata({
  title: 'Admin Dashboard',
  description: 'Administration area for The Dysfunctional Referees.',
  noIndex: true,
});

const prisma = new PrismaClient();

export default async function AdminPage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect('/login');
  }

  // @ts-ignore - session.user.role is injected in auth.ts
  if (session.user.role !== 'ADMIN') {
    redirect('/profile'); // Redirect non-admins back to their profile
  }

  // Fetch all users with their media counts
  const users = await prisma.user.findMany({
    where: { role: 'REFEREE' },
    include: {
      _count: {
        select: { media: true },
      },
    },
    orderBy: { username: 'asc' },
  });

  // Fetch all media
  const allMedia = await prisma.media.findMany({
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 border-b border-white/10 pb-6">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white">
          Admin Dashboard
        </h1>
        <p className="mt-2 text-gray-400">
          Manage referees and view all uploaded media.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
          Referee Accounts
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {users.map((u) => (
            <div key={u.id} className="rounded-xl border border-white/10 bg-navy/50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink/20">
                <span className="text-xl font-bold text-pink">{u.username.charAt(0).toUpperCase()}</span>
              </div>
              <h3 className="font-semibold text-white">{u.username}</h3>
              <p className="mt-1 text-sm text-gray-400">
                {u._count.media} Uploads
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
          Global Media Gallery
        </h2>
        
        {allMedia.length === 0 ? (
          <div className="rounded-xl border border-white/5 bg-navy/30 p-10 text-center text-gray-500">
            No media has been uploaded by referees yet.
          </div>
        ) : (
          <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
            {allMedia.map((media) => (
              <div key={media.id} className="break-inside-avoid overflow-hidden rounded-lg bg-black border border-white/5">
                {media.type === 'PHOTO' ? (
                  <img
                    src={media.url}
                    alt={`Uploaded by ${media.user.username}`}
                    className="w-full object-cover"
                  />
                ) : (
                  <video
                    src={media.url}
                    className="w-full object-cover"
                    controls
                  />
                )}
                <div className="p-3">
                  <p className="text-xs font-semibold text-white">
                    {media.user.username}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(media.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
