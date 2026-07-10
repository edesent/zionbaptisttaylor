import Link from "next/link";

export default function ScriptureBanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-deep via-ink to-ink-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,138,79,0.12),transparent_65%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="w-12 h-px bg-brass mx-auto mb-8" />
        <blockquote>
          <p className="font-serif text-3xl md:text-4xl italic text-white leading-relaxed mb-6">
            &ldquo;For I determined not to know any thing among you, save Jesus Christ,
            and him crucified.&rdquo;
          </p>
          <cite className="text-sm font-semibold tracking-[0.18em] uppercase text-brass-light not-italic">
            — 1 Corinthians 2:2
          </cite>
        </blockquote>
        <div className="w-12 h-px bg-brass mx-auto mt-8" />
        <Link
          href="/gospel"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase text-brass-light hover:text-white transition-colors"
        >
          How can I know I am a Christian? <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
