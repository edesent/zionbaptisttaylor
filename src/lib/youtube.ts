const CHANNEL_ID = "UCyWAEz_-RVuPsZwxqLdoULw";

export interface YouTubeVideo {
  id: string;
  title: string;
  published: string;
  url: string;
  thumbnail: string;
  description: string;
}

// Shown if the live YouTube feed can't be reached (offline build, rate limit, etc.).
// Update these occasionally so the page always has recent sermons even as a fallback.
const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    id: "AZX7Vpl3JOM",
    title: "Anatomy of an Unrepented Sin (2 Samuel 11)",
    published: "2026-01-11T00:00:00+00:00",
    url: "https://www.youtube.com/watch?v=AZX7Vpl3JOM",
    thumbnail: "https://i.ytimg.com/vi/AZX7Vpl3JOM/hqdefault.jpg",
    description: "Sunday sermon from Zion Baptist Church, Taylor, MI.",
  },
  {
    id: "g8I5viEukNI",
    title: "The Prophecy of Joel: Introduction and Overview",
    published: "2026-01-07T00:00:00+00:00",
    url: "https://www.youtube.com/watch?v=g8I5viEukNI",
    thumbnail: "https://i.ytimg.com/vi/g8I5viEukNI/hqdefault.jpg",
    description: "Bible study from Zion Baptist Church, Taylor, MI.",
  },
  {
    id: "6uHMOwj-zrI",
    title:
      "For Your Plans to Glorify God You Must Commit Your Purposes to Him (Prov. 16:1–9)",
    published: "2026-01-04T00:00:00+00:00",
    url: "https://www.youtube.com/watch?v=6uHMOwj-zrI",
    thumbnail: "https://i.ytimg.com/vi/6uHMOwj-zrI/hqdefault.jpg",
    description: "Sunday sermon from Zion Baptist Church, Taylor, MI.",
  },
];

export async function getRecentVideos(): Promise<YouTubeVideo[]> {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  try {
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) return FALLBACK_VIDEOS;
    const xml = await res.text();
    const parsed = parseFeed(xml);
    return parsed.length ? parsed : FALLBACK_VIDEOS;
  } catch {
    return FALLBACK_VIDEOS;
  }
}

function parseFeed(xml: string): YouTubeVideo[] {
  const entries = xml.split("<entry>").slice(1);
  return entries
    .map((entry) => {
      const videoId = match(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
      const title = match(entry, /<title>([^<]+)<\/title>/);
      const published = match(entry, /<published>([^<]+)<\/published>/);
      const thumbnail =
        match(entry, /<media:thumbnail url="([^"]+)"/) ||
        (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "");
      const description = match(
        entry,
        /<media:description>([\s\S]*?)<\/media:description>/
      );

      return {
        id: videoId,
        title: decodeEntities(title),
        published,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail,
        description: decodeEntities(description).slice(0, 280),
      };
    })
    .filter((v) => v.id);
}

function match(text: string, re: RegExp): string {
  const m = text.match(re);
  return m ? m[1] : "";
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
