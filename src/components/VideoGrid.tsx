"use client";

import { useState, useEffect } from "react";
import type { YouTubeVideo } from "@/lib/youtube";

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function VideoGrid({ videos }: { videos: YouTubeVideo[] }) {
  const [active, setActive] = useState<YouTubeVideo | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActive(video)}
            className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm border border-ink/[.05] hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="relative aspect-video bg-ink overflow-hidden">
              {video.thumbnail && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-ink-deep/20 group-hover:bg-ink-deep/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brass/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-ink-deep ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-serif text-lg font-semibold text-text-dark mb-1 line-clamp-2 group-hover:text-brass-dark transition-colors">
                {video.title}
              </h4>
              <p className="text-xs text-text-light">{formatDate(video.published)}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-ink-deep/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-fade-up"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-4 text-white">
              <h3 className="font-serif text-2xl font-semibold mb-1">{active.title}</h3>
              <p className="text-sm text-white/60">{formatDate(active.published)}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
