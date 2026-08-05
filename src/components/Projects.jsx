import React, { useEffect, useRef } from "react";

const projects = [
  {
    id: "01",
    name: "SOKOBASE.CO.KE",
    outcome: "A modern Next.js marketplace for Kenyan merchants and customers. Built with Supabase and Cloudinary to deliver fast product discovery, secure storefronts, and a polished shopping experience.",
    stack: ["Next.js", "Tailwind CSS", "Module CSS", "Supabase", "Cloudinary"],
    live: "https://sokobase.co.ke",
    tag: "Marketplace",
    image: "/sokobase.png",
  },
  {
    id: "02",
    name: "ARENABASE.CO.KE",
    outcome: "A local sports hub for Kajiado football fixtures, results, tournaments, and announcements. Built to keep fans, teams, and organizers connected through one clean, content-driven platform.",
    stack: ["Next.js", "Tailwind CSS", "Module CSS", "Supabase", "Cloudinary"],
    live: "https://arenabase.co.ke",
    tag: "Sports",
    image: "/arenabase.png",
  },
];

function ImagePlaceholder({ index }) {
  const bgColors = [
    "bg-[#EDE8E1] dark:bg-dm-card",
    "bg-[#E8E1ED] dark:bg-dm-card",
    "bg-[#E1EDE8] dark:bg-dm-card",
    "bg-[#EDE1E1] dark:bg-dm-card",
    "bg-[#E1E8ED] dark:bg-dm-card",
  ];
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center gap-2 ${bgColors[index % bgColors.length]}`}>
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="2" stroke="#8C8278" strokeWidth="1.5" />
        <circle cx="10" cy="13" r="2.5" stroke="#8C8278" strokeWidth="1.5" />
        <path d="M2 22l7-5 5 4 4-3 12 6" stroke="#8C8278" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span className="font-mono text-xs text-muted dark:text-dm-subtle">Project Preview</span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-row group border border-accent  dark:border-dm-border bg-canvas dark:bg-dm-surface hover:border-ink dark:hover:border-dm-accent/50 dark:hover:shadow-lg dark:hover:shadow-dm-accent/5 transition-all duration-300 overflow-hidden dm-glow-subtle"
      style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
    >
      <div className="relative w-full h-48 overflow-hidden border-b border-rule dark:border-dm-border">
        {project.image ? (
          <img src={project.image} alt={project.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <ImagePlaceholder index={index} />
        )}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-xs bg-ink dark:bg-dm-accent text-canvas dark:text-white px-2 py-1 uppercase tracking-widest">
            {project.tag}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="font-mono text-xs text-muted dark:text-dm-subtle">{project.id}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-ink dark:text-dm-text group-hover:text-accent dark:group-hover:text-dm-accent transition-colors duration-300 mb-2">
          {project.name}
        </h3>
        <p className="font-body text-sm text-muted dark:text-dm-muted leading-relaxed mb-4">{project.outcome}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((t) => (
            <span key={t} className="font-mono text-xs text-muted dark:text-dm-subtle bg-paper dark:bg-dm-card border border-rule dark:border-dm-border px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-4 border-t border-rule dark:border-dm-border">
          <a href={project.live}
            className="flex-1 text-center py-2.5 bg-ink dark:bg-dm-accent text-canvas dark:text-white font-body text-xs font-medium hover:bg-accent dark:hover:bg-dm-accent/80 transition-colors duration-300">
            View Live ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".project-row").forEach((el, i) => {
            setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 80);
          });
        }
      });
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 bg-canvas dark:bg-dm-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-6 mb-14 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-xs text-muted dark:text-dm-subtle uppercase tracking-widest">Selected Work</span>
              <span className="flex-1 h-px bg-rule dark:bg-dm-border" />
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl text-ink dark:text-dm-text leading-tight">
              Projects that <em>moved the needle.</em>
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="font-body text-sm text-muted dark:text-dm-muted leading-relaxed">
              Real problems, clean code, and results that matter for the businesses behind them.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
