import React, { useEffect, useRef } from "react";

const groups = [
  { label: "Frontend", skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React"] },
  { label: "Styling", skills: ["Tailwind CSS", "CSS Grid", "Flexbox", "Responsive Design"] },
  { label: "Tools", skills: ["Git & GitHub", "Canva", "AI Tools", "VS Code"] },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".sk-reveal").forEach((el, i) => {
            setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 80);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 bg-paper dark:bg-dm-surface border-t border-rule dark:border-dm-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16 sk-reveal" style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s ease" }}>
          <span className="font-mono text-xs text-muted dark:text-dm-subtle uppercase tracking-widest">Toolkit</span>
          <span className="flex-1 h-px bg-rule dark:bg-dm-border" />
          <h2 className="font-display font-black text-3xl md:text-4xl text-ink dark:text-dm-text">Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-rule dark:divide-dm-border border border-rule dark:border-dm-border">
          {groups.map((group) => (
            <div key={group.label} className="sk-reveal p-8 bg-canvas dark:bg-dm-card"
              style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s ease" }}>
              <p className="font-mono text-xs text-accent dark:text-dm-accent uppercase tracking-widest mb-6 pb-4 border-b border-rule dark:border-dm-border">
                {group.label}
              </p>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 group cursor-default">
                    <span className="w-1 h-1 rounded-full bg-rule dark:bg-dm-border group-hover:bg-accent dark:group-hover:bg-dm-accent transition-colors duration-200 shrink-0" />
                    <span className="font-body text-sm text-ink-2 dark:text-dm-muted group-hover:text-ink dark:group-hover:text-dm-text transition-colors duration-200">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="sk-reveal font-mono text-xs text-muted dark:text-dm-subtle mt-8 text-center"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s ease" }}>
          Always learning currently exploring Next.js 14 and advanced animation patterns.
        </p>
      </div>
    </section>
  );
}
