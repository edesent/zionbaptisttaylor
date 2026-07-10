"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#welcome", label: "Welcome" },
  { href: "#services", label: "Services" },
  { href: "#beliefs", label: "Beliefs" },
  { href: "#life", label: "Life" },
  { href: "#sermons", label: "Sermons" },
  { href: "#give", label: "Give" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  // On subpages the section anchors don't exist, so point them at the homepage
  // (e.g. "/#welcome"); on the homepage keep the in-page smooth-scroll behavior.
  const resolve = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMenuOpen(false);
    if (!href.startsWith("#")) return;
    // Off the homepage: let the browser follow the resolved "/#hash" link.
    if (!isHome) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-deep/[.97] py-3 shadow-lg backdrop-blur-sm"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href={resolve("#home")}
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex flex-col leading-none text-white"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-white whitespace-nowrap">
            Zion Baptist Church
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] uppercase text-brass-light mt-0.5">
            Taylor, Michigan
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={resolve(link.href)}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white/85 text-sm font-medium px-4 py-2 rounded-md hover:text-white hover:bg-white/10 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.facebook.com/zionbaptistchurchtaylor"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 bg-brass text-ink-deep text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brass-light hover:-translate-y-0.5 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Watch Live
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed lg:hidden top-0 right-0 w-72 h-screen bg-ink-deep pt-20 px-8 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={resolve(link.href)}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-white/85 text-base font-medium px-4 py-3 rounded-md hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="https://www.facebook.com/zionbaptistchurchtaylor"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-brass text-ink-deep font-semibold px-6 py-3 rounded-full hover:bg-brass-light transition-all"
              >
                Watch Live
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
