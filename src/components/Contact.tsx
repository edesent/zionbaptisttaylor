import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const MAP_QUERY = "8500 Pardee Road, Taylor, MI 48180";

export default function Contact() {
  return (
    <section id="visit" className="py-28 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brass-dark mb-3">
            Come Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark mb-4">
            Plan Your Visit
          </h2>
          <p className="text-lg text-text-light">
            We&rsquo;d love to worship alongside you this Lord&rsquo;s Day. Here&rsquo;s
            everything you need to find us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <div>
            <AnimateOnScroll>
              <div className="flex gap-5 py-6 border-b border-ink/[.08]">
                <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 flex-shrink-0 text-ink">
                  <path d="M24 4C16 4 10 10.5 10 18c0 10 14 26 14 26s14-16 14-26c0-7.5-6-14-14-14z" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-1">Our Location</h3>
                  <p className="text-text-light">
                    8500 Pardee Road (between Wick &amp; Ecorse)
                    <br />
                    Taylor, MI 48180
                  </p>
                  <Link
                    href="/directions"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-dark hover:text-ink transition-colors"
                  >
                    Driving directions &amp; routes <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="flex gap-5 py-6 border-b border-ink/[.08]">
                <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 flex-shrink-0 text-ink">
                  <path d="M12 8h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M8 16l16 12 16-12" stroke="currentColor" strokeWidth="2.5" />
                </svg>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-1">Phone &amp; Email</h3>
                  <p className="space-x-0">
                    <a href="tel:+13132913128" className="block text-ink font-semibold hover:text-brass-dark transition-colors">
                      (313) 291-3128
                    </a>
                    <a href="mailto:pastor@ziontaylor.org" className="block text-ink font-semibold hover:text-brass-dark transition-colors">
                      pastor@ziontaylor.org
                    </a>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="flex gap-5 py-6 border-b border-ink/[.08]">
                <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 flex-shrink-0 text-ink">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M24 12v12l8 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-1">Service Times</h3>
                  <p className="text-text-light">
                    Sunday: 10:00 AM &amp; 11:00 AM
                    <br />
                    Wednesday: 6:30 PM
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250}>
              <div className="flex flex-wrap gap-3 pt-7">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-ink px-6 py-3 rounded-full border-2 border-ink/20 hover:border-ink hover:-translate-y-0.5 transition-all"
                >
                  Common Questions
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-ink px-6 py-3 rounded-full border-2 border-ink/20 hover:border-ink hover:-translate-y-0.5 transition-all"
                >
                  Become a Member
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Map */}
          <AnimateOnScroll delay={150}>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-5 border border-ink/[.08]">
                <iframe
                  title="Map to Zion Baptist Church"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
                  className="w-full h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(MAP_QUERY)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-ink text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-ink hover:bg-ink-soft hover:border-ink-soft hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Get Directions
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
