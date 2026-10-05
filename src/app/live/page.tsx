import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLiveStatus } from "@/lib/live";

export const metadata: Metadata = {
  title: "Watch Live",
  description:
    "Watch the Zion Baptist Church livestream from Taylor, Michigan — Sunday worship at 11:00 AM.",
};

export const dynamic = "force-dynamic";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@zionbaptistchurchtaylormi";

export default async function LivePage() {
  const { isLive, videoId } = await getLiveStatus();
  const showLive = isLive && videoId;

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-ink-deep pt-36 pb-16 md:pt-40 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-ink-deep via-ink to-ink-soft" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(176,138,79,0.14),transparent_60%)]" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            {showLive ? (
              <>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-brass-light mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                  </span>
                  Live Now
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-[1.08]">
                  We are streaming right now
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                  Grab your Bible and join the service in progress.
                </p>
                <div className="mt-10 aspect-video overflow-hidden rounded-xl bg-black shadow-2xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="Zion Baptist Church livestream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </>
            ) : (
              <>
                <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brass-light mb-4">
                  Watch Live
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-[1.08]">
                  Zion Baptist livestream
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                  When we go live, the service will play right here on this
                  page.
                </p>
              </>
            )}
          </div>
        </section>

        {!showLive && (
          <section className="bg-bg py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-6">
              <div className="rounded-2xl border border-ink/[.08] bg-white p-10 text-center shadow-sm">
                <h2 className="font-serif text-4xl font-semibold text-ink">
                  Sundays at 11:00 AM
                </h2>
                <p className="mt-4 text-lg leading-8 text-text-body">
                  We aren&rsquo;t live at the moment. Join us for worship on
                  the Lord&rsquo;s Day — the stream begins shortly after 11:00
                  AM. In the meantime, catch up on recent sermons.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/#sermons"
                    className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-ink hover:bg-ink-soft hover:border-ink-soft transition-all"
                  >
                    Recent Sermons
                  </Link>
                  <a
                    href={YOUTUBE_CHANNEL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-ink/25 hover:border-ink transition-all"
                  >
                    YouTube Channel
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
