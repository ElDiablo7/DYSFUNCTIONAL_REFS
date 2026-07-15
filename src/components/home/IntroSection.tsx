export function IntroSection() {
  return (
    <section className="relative py-20 lg:py-28" aria-labelledby="intro-heading">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="intro-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl"
          >
            Serious officials.{' '}
            <span className="text-pink">Proper personalities.</span>
          </h2>

          <div className="section-divider mt-6" />

          <p className="mt-8 text-lg leading-relaxed text-gray-300">
            The Dysfunctional Referees brings together a coordinated group of
            rugby officials for tournaments, festivals, fixtures and special
            events. We combine professional match control with the personality,
            communication and calm needed to keep rugby moving.
          </p>

          <div className="mt-10 rounded-2xl border border-gold/10 bg-navy/30 p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-gold-bright">
                  For Organisers
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  One dependable point of contact.
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-gold-bright">
                  For Referees
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  A team around them.
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-gold-bright">
                  For Players
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  A game that is controlled, safe and worth remembering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
