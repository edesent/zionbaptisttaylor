export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-deep"
    >
      {/* Background — looping muted clip of the pastor preaching.
          Drop the file at public/hero-video.mp4 (and an optional poster at
          public/hero-poster.jpg). Until then, the deep slate background shows. */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover object-[center_35%]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlay — keeps text legible over the footage */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/75 via-ink-deep/55 to-ink-deep/90 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,138,79,0.18),transparent_65%)] z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center text-white max-w-3xl px-5 py-10">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.32em] uppercase text-brass-light mb-5 animate-fade-up animation-delay-200">
          Reformed Baptist Church · Taylor, Michigan
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.05] mb-6 animate-fade-up animation-delay-400">
          Zion Baptist Church
        </h1>
        <div className="w-24 h-px bg-brass mx-auto mb-7 animate-fade-up animation-delay-600" />
        <p className="font-serif text-2xl md:text-3xl italic text-white/90 leading-relaxed max-w-2xl mx-auto mb-9 animate-fade-up animation-delay-800">
          Christ-Centered &amp; Word-Driven —
          <span className="block not-italic text-lg md:text-xl text-brass-light mt-2 tracking-wide">
            Living &amp; Loving Like Family
          </span>
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-1000">
          <a
            href="#visit"
            className="inline-block bg-brass text-ink-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brass hover:bg-brass-light hover:border-brass-light hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Plan Your Visit
          </a>
          <a
            href="https://www.facebook.com/zionbaptistchurchtaylor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/40 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Watch Live
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-fade-up animation-delay-1300">
        <a
          href="#welcome"
          className="flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.15em] uppercase"
        >
          <span>Scroll</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-white/40 rotate-45 animate-scroll-bounce" />
        </a>
      </div>
    </header>
  );
}
