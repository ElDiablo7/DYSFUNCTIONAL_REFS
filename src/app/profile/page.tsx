import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import ProfileUploader from './ProfileUploader';
import Image from 'next/image';

const prisma = new PrismaClient();

export default async function ProfilePage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect('/login');
  }

  // @ts-ignore - session.user.role is injected in auth.ts
  if (session.user.role === 'ADMIN') {
    redirect('/admin');
  }

  const mediaList = await prisma.media.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white">
            Referee Profile
          </h1>
          <p className="mt-2 text-gray-400">
            Welcome back, <span className="text-pink font-semibold">{session.user.name}</span>!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <ProfileUploader />
        </div>

        <div className="lg:col-span-2">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
            Your Uploads
          </h2>
          
          {mediaList.length === 0 ? (
            <div className="rounded-xl border border-white/5 bg-navy/30 p-10 text-center text-gray-500">
              You haven't uploaded any photos or videos yet.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {mediaList.map((media) => (
                <div key={media.id} className="group relative aspect-square overflow-hidden rounded-lg bg-black/50">
                  {media.type === 'PHOTO' ? (
                    <img
                      src={media.url}
                      alt="Uploaded media"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <video
                      src={media.url}
                      className="h-full w-full object-cover"
                      controls
                    />
                  )}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-xs text-white">
                      {new Date(media.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
