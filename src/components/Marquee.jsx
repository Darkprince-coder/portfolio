import React from "react";

const items = [
  "React", "Next.js", "Tailwind CSS", "JavaScript", "HTML & CSS",
  "Mobile-First Design", "Fast Delivery", "Clean Code", "AI-Powered Workflows",
  "React", "Next.js", "Tailwind CSS", "JavaScript", "HTML & CSS",
  "Mobile-First Design", "Fast Delivery", "Clean Code", "AI-Powered Workflows",
];

export default function Marquee() {
  return (
    <div className="border-y border-rule dark:border-dm-border bg-ink dark:bg-dm-surface overflow-hidden py-3.5 select-none">
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 font-mono text-xs tracking-widest uppercase text-canvas/50 dark:text-dm-muted">
            {item}
            <span className="text-accent dark:text-dm-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
