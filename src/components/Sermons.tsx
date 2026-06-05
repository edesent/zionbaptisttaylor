import { getRecentVideos } from "@/lib/youtube";
import VideoGrid from "./VideoGrid";

export default async function Sermons() {
  const videos = (await getRecentVideos()).slice(0, 6);

  return (
    <section id="sermons" className="py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brass-dark mb-3">
            Sit Under the Word
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark mb-4">
            Recent Sermons
          </h2>
          <p className="text-lg text-text-light">
            Expository preaching through the Scriptures. Watch the latest messages, or join us
            live each Lord&rsquo;s Day.
          </p>
        </div>

        {videos.length > 0 ? (
          <VideoGrid videos={videos} />
        ) : (
          <p className="text-center text-text-light">
            Sermons are available on our{" "}
            <a
              href="https://www.youtube.com/@zionbaptistchurchtaylormi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brass-dark hover:text-ink transition-colors"
            >
              YouTube channel
            </a>
            .
          </p>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <a
            href="https://www.youtube.com/@zionbaptistchurchtaylormi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-ink hover:bg-ink-soft hover:border-ink-soft hover:-translate-y-0.5 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
            </svg>
            All Sermons on YouTube
          </a>
          <a
            href="https://www.facebook.com/zionbaptistchurchtaylor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ink font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-ink/25 hover:border-ink hover:-translate-y-0.5 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Watch Live · Sundays ~11:10 AM
          </a>
        </div>
      </div>
    </section>
  );
}
