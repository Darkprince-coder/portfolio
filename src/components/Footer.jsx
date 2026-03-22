import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink dark:bg-dm-surface border-t border-canvas/10 dark:border-dm-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-display font-bold text-lg text-canvas dark:text-dm-text hover:text-accent dark:hover:text-dm-accent transition-colors">
          Joseph<span className="text-accent dark:text-dm-accent italic"> Maina</span>
        </a>
        <p className="font-mono text-xs text-canvas/30 dark:text-dm-subtle">
          © {year} MJ Elite Creatives. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          {["Work", "Process", "About", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-body text-xs text-canvas/30 dark:text-dm-subtle hover:text-canvas dark:hover:text-dm-text transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
