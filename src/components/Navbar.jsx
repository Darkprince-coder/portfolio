import React, { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar({ isDark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-canvas/95 dark:bg-dm-surface/95 backdrop-blur-md border-b border-rule dark:border-dm-border shadow-sm dark:shadow-black/30"
        : "bg-transparent"
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-lg text-ink dark:text-dm-text tracking-tight hover:text-accent dark:hover:text-dm-accent transition-colors">
          MJ Elite<span className="text-accent dark:text-dm-accent italic"> Creatives</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="font-body text-sm font-medium text-muted dark:text-dm-muted hover:text-ink dark:hover:text-dm-text transition-colors duration-200 tracking-wide">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="relative w-14 h-7 rounded-full border border-rule dark:border-dm-border bg-paper dark:bg-dm-card transition-all duration-300 focus:outline-none"
          >
            <span className={`absolute top-1 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
              isDark
                ? "left-[calc(100%-1.5rem)] bg-dm-accent text-dm-bg shadow-lg"
                : "left-1 bg-ink text-canvas"
            }`}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink dark:bg-dm-accent text-canvas dark:text-white text-sm font-medium font-body hover:bg-accent dark:hover:bg-dm-accent/80 transition-colors duration-300">
            Work With Us <span className="text-xs">↗</span>
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleDark} aria-label="Toggle dark mode"
            className="w-8 h-8 flex items-center justify-center text-muted dark:text-dm-muted hover:text-ink dark:hover:text-dm-text transition-colors">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-1" aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-ink dark:bg-dm-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-ink dark:bg-dm-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-ink dark:bg-dm-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`md:hidden bg-canvas dark:bg-dm-surface border-b border-rule dark:border-dm-border overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72" : "max-h-0"}`}>
        <ul className="flex flex-col px-6 py-5 gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}
                className="font-body font-medium text-ink-2 dark:text-dm-muted hover:text-accent dark:hover:text-dm-accent transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="inline-flex px-5 py-2.5 bg-ink dark:bg-dm-accent text-canvas dark:text-white text-sm font-medium hover:bg-accent transition-colors">
              Work With Us ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
