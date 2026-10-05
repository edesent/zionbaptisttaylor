import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { getAllArticles, getArticle, formatDate } from "@/lib/articles";

const BASE = "https://www.ziontaylor.org";

// Only the article files that exist get pages; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const description = article.summary || undefined;
  return {
    title: article.title,
    description,
    alternates: { canonical: `/articles/${article.slug}` },
    authors: [{ name: article.author }],
    openGraph: {
      type: "article",
      title: article.title,
      description,
      url: `/articles/${article.slug}`,
      publishedTime: article.date || undefined,
      authors: [article.author],
      images: ["/og-image.jpg"],
    },
    robots: article.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Church",
      name: "Zion Baptist Church",
      url: BASE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Taylor",
        addressRegion: "MI",
        addressCountry: "US",
      },
    },
    mainEntityOfPage: `${BASE}/articles/${article.slug}`,
    image: `${BASE}/og-image.jpg`,
  };

  const meta = [
    article.date ? formatDate(article.date) : null,
    `${article.readingMinutes} min read`,
  ]
    .filter(Boolean)
    .join("  \u00b7  ");

  return (
    <PageShell eyebrow={meta} title={article.title} lede={article.summary || undefined}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-wrap items-center gap-3 mb-10 text-sm font-semibold tracking-wide uppercase text-brass-dark">
        <span>By {article.author}</span>
        {article.draft && (
          <span className="rounded-full bg-brass/15 px-3 py-1 text-xs tracking-[0.12em]">
            Draft: preview only
          </span>
        )}
      </div>

      <article
        className="prose-zion"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />

      <aside className="mt-16 rounded-2xl bg-bg-soft border border-ink/[.06] p-6 md:p-8">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-dark">
          Worship with us in Taylor
        </h2>
        <p className="mt-3 text-text-body leading-relaxed">
          Zion Baptist Church gathers every Sunday for Sunday School at 10 AM
          and worship at 11 AM, with Bible study on Wednesdays at 6:30 PM. You
          are welcome to join us.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#visit"
            className="inline-flex items-center bg-brass text-ink-deep text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brass-light transition-all"
          >
            Plan a Visit
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center border border-ink/15 text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-all"
          >
            More Articles
          </Link>
        </div>
      </aside>
    </PageShell>
  );
}
