import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const moments = [
  {
    src: "/sunday-school.jpg",
    alt: "Children in Sunday School at Zion Baptist Church working on a lesson together",
    kicker: "We Learn Together",
    caption: "Sunday School for every age — opening the Word side by side.",
  },
  {
    src: "/fellowship-breakfast.jpg",
    alt: "Members of Zion Baptist Church sharing a fellowship breakfast",
    kicker: "We Gather Together",
    caption: "Sharing a meal and doing life together as one family.",
  },
  {
    src: "/serving-community.jpg",
    alt: "Zion Baptist Church members serving their Taylor neighborhood",
    kicker: "We Serve Together",
    caption: "Loving our Taylor neighbors in the name of Christ.",
  },
];

export default function LifeAtZion() {
  return (
    <section id="life" className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brass-dark mb-3">
            Life Together
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark mb-4">
            Life at Zion
          </h2>
          <p className="text-lg text-text-light">
            We are more than a Sunday morning. From the classroom to the table to
            the street, we grow, gather, and serve together — like family.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((m, i) => (
            <AnimateOnScroll key={m.src} delay={i * 120}>
              <figure className="group relative h-full overflow-hidden rounded-2xl shadow-sm border border-ink/[.05] hover:shadow-xl transition-all">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.src}
                    alt={m.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Warm gradient so the caption stays legible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-left">
                    <span className="block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-brass-light mb-1.5">
                      {m.kicker}
                    </span>
                    <p className="font-serif text-lg text-white leading-snug">
                      {m.caption}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/missions"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-brass-dark hover:text-ink transition-colors"
          >
            Our heart for missions <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
