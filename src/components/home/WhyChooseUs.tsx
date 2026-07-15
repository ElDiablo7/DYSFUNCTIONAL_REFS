import { Phone, UserCheck, MessageSquare, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Phone,
    title: 'One Coordinated Booking Contact',
    description:
      'Stop chasing individual referees. One enquiry, one point of contact, one organised team for your event.',
  },
  {
    icon: UserCheck,
    title: 'Officials Matched to the Event',
    description:
      'We assess the format, level, and scale of your event, then assign referees who are the right fit.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Pre-Event Communication',
    description:
      'Schedules, pitch plans, and any special requirements are covered before the day, not on the day.',
  },
  {
    icon: Shield,
    title: 'Calm, Credible Match Management',
    description:
      'Officials who control the game with authority, communicate with players, and keep rugby safe and enjoyable.',
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="relative border-y border-gold/10 bg-navy/30 py-20 lg:py-28"
      aria-labelledby="why-heading"
    >
      <div className="container-wide">
        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-pink">
            The Difference
          </p>
          <h2
            id="why-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl"
          >
            Why Organisers{' '}
            <span className="text-metallic-gold">Choose Us</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink/10 to-gold/5 text-pink">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wide text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
