import React, { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".a-reveal").forEach((el, i) => {
            setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 130);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-canvas dark:bg-dm-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="a-reveal flex items-center gap-4 mb-16" style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
          <span className="font-mono text-xs text-muted dark:text-dm-subtle uppercase tracking-widest">About Me</span>
          <span className="flex-1 h-px bg-rule dark:bg-dm-border" />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="a-reveal" style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
              <blockquote className="font-display font-bold text-3xl md:text-4xl text-ink dark:text-dm-text leading-tight border-l-4 border-accent dark:border-dm-accent pl-6">
                "Code is a means to an end — the end is a business that grows."
              </blockquote>
            </div>

            <div className="a-reveal mt-10 border border-rule dark:border-dm-border p-6 bg-paper dark:bg-dm-surface dark:shadow-lg dark:shadow-black/20"
              style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-ink dark:bg-dm-accent text-canvas dark:text-white flex items-center justify-center font-display font-bold text-xl shrink-0">JM</div>
                <div>
                  <p className="font-display font-bold text-ink dark:text-dm-text">Joseph Maina</p>
                  <p className="font-body text-sm text-muted dark:text-dm-muted">Web Developer · Nairobi, KE</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between py-3 border-b border-rule dark:border-dm-border">
                  <span className="font-mono text-xs text-muted dark:text-dm-subtle uppercase tracking-wide">Availability</span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-green-600 dark:text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />Open to work
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-rule dark:border-dm-border">
                  <span className="font-mono text-xs text-muted dark:text-dm-subtle uppercase tracking-wide">Speciality</span>
                  <span className="font-mono text-xs text-ink dark:text-dm-text">Frontend / React</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-mono text-xs text-muted dark:text-dm-subtle uppercase tracking-wide">Delivery</span>
                  <span className="font-mono text-xs text-accent dark:text-dm-accent">Under 2 weeks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="a-reveal" style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
              <p className="font-body text-base text-ink-2 dark:text-dm-muted leading-relaxed">
                I'm a web developer focused on building clean, responsive, and user-friendly websites. I combine modern development tools with AI-powered workflows to deliver high-quality results faster and more efficiently.
              </p>
            </div>
            <div className="a-reveal" style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
              <p className="font-body text-base text-ink-2 dark:text-dm-muted leading-relaxed">
                My goal is simple: create websites that not only look good but also solve real problems and help businesses grow. I care about the details from how fast a page loads to whether a visitor on a budget phone in low connectivity can actually use it.
              </p>
            </div>

            <div className="a-reveal grid sm:grid-cols-3 gap-0 divide-x divide-rule dark:divide-dm-border border border-rule dark:border-dm-border mt-8"
              style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
              {[
                { stat: "< 2 wks", label: "Avg. delivery time" },
                { stat: "Mobile", label: "First approach always" },
                { stat: "Clean", label: "Code you can build on" },
              ].map((item) => (
                <div key={item.label}
                  className="p-5 bg-paper dark:bg-dm-surface hover:bg-accent-light dark:hover:bg-dm-card transition-colors duration-300">
                  <p className="font-display font-bold text-2xl text-accent dark:text-dm-accent">{item.stat}</p>
                  <p className="font-body text-xs text-muted dark:text-dm-muted mt-1 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
