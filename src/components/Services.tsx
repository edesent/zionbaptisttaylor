import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Sunday School",
    time: "10:00 AM",
    desc: "Bible study classes for adults and children, digging into the Scriptures together.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-brass">
        <path
          d="M24 12C18 8 10 8 6 10v26c4-2 12-2 18 2 6-4 14-4 18-2V10c-4-2-12-2-18 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M24 12v28" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Lord's Day Worship",
    time: "11:00 AM",
    desc: "Our main service of worship and the preaching of the Word. Children's Church meets concurrently.",
    featured: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-brass-light">
        <path d="M24 4v40M12 20h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Wednesday Bible Study & Prayer",
    time: "6:30 – 8:00 PM",
    desc: "A midweek gathering for deeper study in the Word and corporate prayer.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-brass">
        <path
          d="M24 8c-6 6-10 11-10 17a10 10 0 0 0 20 0c0-6-4-11-10-17z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden bg-ink-deep">
      {/* Building photo background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/building.jpg"
        alt="Zion Baptist Church building in Taylor, Michigan"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Slate overlay keeps the text legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/90 via-ink-deep/80 to-ink-deep/95" />
      {/* Subtle radiance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(176,138,79,0.12),transparent_60%)]" />

      <div className="relative z-[2] max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brass-light mb-3">
            Join Us in Worship
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Times of Gathering
          </h2>
          <p className="text-lg text-white/60">
            We meet at 8500 Pardee Road in Taylor. You are warmly invited to any of our services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div
                className={`relative h-full rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-2xl ${
                  s.featured
                    ? "bg-brass/[.12] border border-brass/30"
                    : "bg-white/[.05] border border-white/[.08] hover:bg-white/[.08]"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brass text-ink-deep text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1 rounded-full">
                    Main Service
                  </span>
                )}
                <div className="flex justify-center mb-5">{s.icon}</div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xl font-semibold text-brass-light mb-3">{s.time}</p>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Lord's Supper note */}
        <AnimateOnScroll delay={300}>
          <p className="mt-10 text-center text-sm text-white/45">
            The Lord&rsquo;s Supper is observed on the first Sunday of each month, following
            morning worship.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
