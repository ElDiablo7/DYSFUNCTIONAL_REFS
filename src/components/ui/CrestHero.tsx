'use client';

import Image from 'next/image';

export function CrestHero({ size = 'large' }: { size?: 'large' | 'small' }) {
  const sizeClasses = size === 'large'
    ? 'w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]'
    : 'w-32 h-32 sm:w-40 sm:h-40';

  return (
    <div className={`relative ${sizeClasses}`}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(242,41,168,0.3) 0%, rgba(212,175,55,0.15) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Crest container with float animation */}
      <div className="relative h-full w-full animate-[float_6s_ease-in-out_infinite]">
        {/* Drop shadow */}
        <div
          className="absolute bottom-[-5%] left-[10%] right-[10%] h-[10%] rounded-full opacity-30 blur-xl"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          aria-hidden="true"
        />

        {/* Crest image */}
        <Image
          src="/assets/dysfunctional-referees-crest.png"
          alt="The Dysfunctional Referees official crest"
          fill
          className="object-contain drop-shadow-2xl"
          priority={size === 'large'}
          sizes={size === 'large' ? '(max-width: 640px) 256px, (max-width: 1024px) 320px, 420px' : '(max-width: 640px) 128px, 160px'}
        />

        {/* Sun glint overlay */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 animate-[glint_6s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,215,106,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,215,106,0.4) 55%, transparent 60%)',
              width: '200%',
              height: '200%',
              top: '-50%',
              left: '-50%',
            }}
          />
        </div>

        {/* Gold highlight ring */}
        <div
          className="pointer-events-none absolute inset-[5%] rounded-full opacity-20"
          style={{
            background: 'transparent',
            boxShadow: 'inset 0 0 30px rgba(212,175,55,0.3), 0 0 20px rgba(212,175,55,0.1)',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
