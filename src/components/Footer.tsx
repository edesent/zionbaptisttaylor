const quickLinks = [
  { href: "#welcome", label: "Welcome" },
  { href: "#services", label: "Service Times" },
  { href: "#beliefs", label: "What We Believe" },
  { href: "#sermons", label: "Sermons" },
  { href: "#visit", label: "Plan Your Visit" },
];

const serviceTimes = [
  { label: "Sunday School", time: "10:00 AM" },
  { label: "Lord's Day Worship", time: "11:00 AM" },
  { label: "Wednesday Bible Study", time: "6:30 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-white/70 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/[.08]">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="font-serif text-2xl font-semibold text-white leading-tight">
              Zion Baptist Church
            </p>
            <p className="text-[11px] font-medium tracking-[0.24em] uppercase text-brass-light mt-1 mb-4">
              Taylor, Michigan
            </p>
            <p className="text-sm leading-relaxed">
              8500 Pardee Road
              <br />
              Taylor, MI 48180
              <br />
              <a href="tel:+13132913128" className="text-brass-light hover:text-brass transition-colors">
                (313) 291-3128
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-brass-light sm:hover:pl-1 transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-semibold text-white mb-5">Service Times</h4>
            <ul className="space-y-2.5">
              {serviceTimes.map((s) => (
                <li key={s.label} className="text-sm text-white/60">
                  <strong className="text-white/85 font-semibold">{s.label}</strong> — {s.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-semibold text-white mb-5">Connect With Us</h4>
            <div className="flex gap-3 mb-6 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/zionbaptistchurchtaylor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[.08] text-white/70 hover:bg-brass hover:text-ink-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@zionbaptistchurchtaylormi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[.08] text-white/70 hover:bg-brass hover:text-ink-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                </svg>
              </a>
            </div>
            <p className="text-sm italic text-white/40 leading-relaxed">
              &ldquo;For I determined not to know any thing among you, save Jesus Christ, and him
              crucified.&rdquo;
              <br />
              <em className="not-italic text-white/30">— 1 Corinthians 2:2</em>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center py-6 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} Zion Baptist Church · Taylor, MI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
