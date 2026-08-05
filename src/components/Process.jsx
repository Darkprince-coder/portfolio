import React, { useEffect, useRef } from "react";

const steps = [
  { number: "01", title: "Discover", desc: "We start with a conversation. We learn about your business, your goals, and who you're trying to reach. No templates, no assumptions — every project starts with understanding.", detail: "~1–2 days" },
  { number: "02", title: "Build", desc: "We design and develop your site using modern tools. You see progress along the way and can give feedback. AI-assisted workflows help us move fast without sacrificing quality.", detail: "~5–10 days" },
  { number: "03", title: "Launch", desc: "We review together, make final tweaks, and go live. We handle deployment and make sure everything works perfectly on every device before handing it over.", detail: "~1–2 days" },
];

export default function Process() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".step-card").forEach((el, i) => {
            setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 120);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="py-24 bg-paper dark:bg-dm-bg border-y border-rule dark:border-dm-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-6 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-xs text-muted dark:text-dm-subtle uppercase tracking-widest">How We Work</span>
              <span className="flex-1 h-px bg-rule dark:bg-dm-border" />
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl text-ink dark:text-dm-text leading-tight">
              A simple process.<br /><em>No surprises.</em>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="font-body text-sm text-muted dark:text-dm-muted leading-relaxed">
              Most developers are a black box you hand over a brief and wait. We believe in clarity, communication, and delivering exactly what was agreed, on time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-rule dark:divide-dm-border">
          {steps.map((step) => (
            <div key={step.number}
              className="step-card group p-8 hover:bg-canvas dark:hover:bg-dm-surface transition-colors duration-300"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}>
              <div className="flex items-start justify-between mb-8">
                <span className="font-display font-black text-5xl text-rule dark:text-dm-border group-hover:text-accent dark:group-hover:text-dm-accent transition-colors duration-300">
                  {step.number}
                </span>
                <span className="font-mono text-xs text-muted dark:text-dm-subtle border border-rule dark:border-dm-border px-2 py-1 mt-1">
                  {step.detail}
                </span>
              </div>
              <div className="w-12 h-0.5 bg-ink dark:bg-dm-muted mb-6 group-hover:w-20 group-hover:bg-accent dark:group-hover:bg-dm-accent transition-all duration-500" />
              <h3 className="font-display font-bold text-2xl text-ink dark:text-dm-text mb-4">{step.title}</h3>
              <p className="font-body text-sm text-muted dark:text-dm-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-rule dark:border-dm-border">
          <p className="font-body text-sm text-muted dark:text-dm-muted">
            Most projects delivered in <strong className="text-ink dark:text-dm-text">under 2 weeks.</strong> Rush delivery available.
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink dark:bg-dm-accent text-canvas dark:text-white text-sm font-body font-medium hover:bg-accent dark:hover:bg-dm-accent/80 transition-colors duration-300 shrink-0">
            Start a Project ↗
          </a>
        </div>
      </div>
    </section>
  );
}
