import AnimateOnScroll from "./AnimateOnScroll";

export default function Welcome() {
  return (
    <section id="welcome" className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait — replace this block with:
              <img src="/pastor.jpg" alt="Pastor Michael R. Jones" className="w-full object-cover" />
              once a photo is available. */}
          <AnimateOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-ink">
              <div className="absolute inset-0 bg-gradient-to-br from-ink-soft via-ink to-ink-deep" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,rgba(176,138,79,0.22),transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <span className="font-serif text-7xl text-brass/80 mb-4">&ldquo;</span>
                <p className="font-serif text-2xl italic text-white/90 leading-relaxed">
                  Preach the word; be instant in season, out of season.
                </p>
                <span className="mt-5 text-xs font-semibold tracking-[0.2em] uppercase text-brass-light">
                  2 Timothy 4:2
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll delay={200}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brass-dark mb-3">
                A Word From Our Pastor
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark leading-tight mb-6">
                You&rsquo;re Welcome at Zion
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-4">
                Whether you are exploring the Christian faith for the first time or seeking a
                church home where the Bible is opened and Christ is exalted, we are glad you
                found us. At Zion, you&rsquo;ll find a congregation that worships reverently,
                loves one another genuinely, and lives life together like family.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                Under the ministry of{" "}
                <strong className="text-text-body">Pastor Michael R. Jones</strong>, the
                Scriptures are preached verse by verse, book by book — because we believe the
                Word of God is sufficient to feed, correct, and grow His people.
              </p>
              <p className="text-text-light leading-relaxed mb-7">
                Standing in the historic Particular (Reformed) Baptist tradition, our worship
                is Christ-centered and our life together is shaped by grace. Come as you are —
                there is a seat saved for you this Lord&rsquo;s Day.
              </p>
              <a
                href="#visit"
                className="inline-block bg-ink text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-ink hover:bg-ink-soft hover:border-ink-soft hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Plan Your Visit
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
