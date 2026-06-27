import AnimateOnScroll from "./AnimateOnScroll";

export default function Give() {
  return (
    <section id="give" className="relative py-28 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-deep via-ink to-ink-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,138,79,0.12),transparent_65%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brass-light mb-3">
            Give
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Partner With the Ministry
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-4">
            Your generous giving supports the preaching of God&rsquo;s Word, the care of our
            congregation, and the work of the gospel here in Taylor and beyond. Every gift,
            large or small, is received with gratitude and stewarded faithfully.
          </p>
          <blockquote className="font-serif text-xl italic text-brass-light leading-relaxed mb-10">
            &ldquo;Every man according as he purposeth in his heart, so let him give; not
            grudgingly, or of necessity: for God loveth a cheerful giver.&rdquo;
            <cite className="block text-sm font-semibold tracking-[0.18em] uppercase text-white/60 not-italic mt-3">
              — 2 Corinthians 9:7
            </cite>
          </blockquote>
          <a
            href="https://www.faithstreet.com/church/zion-baptist-church-taylor-mi-taylor-mi/giving"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brass text-ink-deep font-semibold text-sm tracking-wide uppercase px-10 py-4 rounded-full hover:bg-brass-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Give Online
          </a>
          <p className="text-sm text-white/50 mt-5">
            Secure online giving through FaithStreet
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
