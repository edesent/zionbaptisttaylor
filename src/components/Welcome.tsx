import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Welcome() {
  return (
    <section id="welcome" className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Pastor & family */}
          <AnimateOnScroll>
            <figure className="rounded-2xl overflow-hidden shadow-xl bg-ink">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pastor-and-family.jpg"
                alt="Pastor Michael R. Jones and his family"
                className="w-full h-full object-cover"
              />
              <figcaption className="bg-ink text-center text-sm text-white/70 py-3 px-4">
                Pastor Michael R. Jones &amp; family
              </figcaption>
            </figure>
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
                <Link
                  href="/about/pastor"
                  className="font-semibold text-brass-dark underline underline-offset-2 hover:text-ink transition-colors"
                >
                  Pastor Michael R. Jones
                </Link>
                , the Scriptures are preached verse by verse, book by book — because we
                believe the Word of God is sufficient to feed, correct, and grow His people.
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

              <p className="mt-6 text-sm text-text-light">
                Get to know us:{" "}
                <Link
                  href="/about/pastor"
                  className="font-semibold text-brass-dark hover:text-ink transition-colors"
                >
                  Meet Pastor Jones
                </Link>{" "}
                ·{" "}
                <Link
                  href="/about/leadership"
                  className="font-semibold text-brass-dark hover:text-ink transition-colors"
                >
                  Our Elders &amp; Deacons
                </Link>{" "}
                ·{" "}
                <Link
                  href="/about"
                  className="font-semibold text-brass-dark hover:text-ink transition-colors"
                >
                  About Zion
                </Link>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
