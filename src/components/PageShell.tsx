import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

export default function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: PageShellProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero band */}
        <section className="relative overflow-hidden bg-ink-deep pt-36 pb-16 md:pt-40 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-ink-deep via-ink to-ink-soft" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(176,138,79,0.14),transparent_60%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            {eyebrow && (
              <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brass-light mb-4">
                {eyebrow}
              </span>
            )}
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-[1.08]">
              {title}
            </h1>
            {lede && (
              <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                {lede}
              </p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="bg-bg py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            {children}

            <div className="mt-16 pt-8 border-t border-ink/[.08]">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-brass-dark hover:text-ink transition-colors"
              >
                <span aria-hidden>&larr;</span> Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
