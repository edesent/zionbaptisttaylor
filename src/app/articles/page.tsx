import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getAllArticles, formatDate } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles from Zion Baptist Church in Taylor, Michigan: Bible teaching, Reformed Baptist doctrine, and help for the Christian life from Pastor Michael R. Jones.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles | Zion Baptist Church",
    description:
      "Bible teaching, Reformed Baptist doctrine, and help for the Christian life from Zion Baptist Church in Taylor, Michigan.",
    url: "/articles",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <PageShell
      eyebrow="Articles"
      title="From the Pastor&rsquo;s Desk"
      lede="Bible teaching, Reformed Baptist doctrine, and help for the Christian life from Zion Baptist Church in Taylor, Michigan."
    >
      {articles.length === 0 ? (
        <p className="text-lg italic text-text-light">
          New articles are on the way. Please check back soon.
        </p>
      ) : (
        <ul className="space-y-6">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/articles/${a.slug}`}
                className="group block bg-white rounded-2xl p-6 md:p-8 border border-ink/[.07] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase text-brass-dark">
                  {a.date && <time dateTime={a.date}>{formatDate(a.date)}</time>}
                  {a.date && (
                    <span aria-hidden className="text-ink/20">
                      &bull;
                    </span>
                  )}
                  <span>{a.readingMinutes} min read</span>
                  {a.draft && (
                    <span className="rounded-full bg-brass/15 px-2.5 py-0.5 tracking-[0.12em]">
                      Draft
                    </span>
                  )}
                </div>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl font-semibold text-text-dark leading-tight group-hover:text-brass-dark transition-colors">
                  {a.title}
                </h2>
                {a.summary && (
                  <p className="mt-3 text-text-body leading-relaxed">
                    {a.summary}
                  </p>
                )}
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-brass-dark">
                  Read article <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
