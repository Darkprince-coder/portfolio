import React, { useEffect, useRef, useState } from "react";

// ✏️ Replace with real client quotes when you have them
const testimonials = [
  {
    id: 1,
    quote: "Joseph delivered our website in under two weeks and it looked better than anything we'd seen from agencies charging five times more. Clean, fast, and exactly what we asked for.",
    name: "Edwin Kariuki", role: "Founder", company: "OffGrid.ke", initial: "EK",
  },
  {
    id: 2,
    quote: "I came with a rough idea and he turned it into something I'm genuinely proud to show people. He explained every decision, which made the whole process feel collaborative.",
    name: "Mary Wangare", role: "Owner", company: "Tebah Lights", initial: "MW",
  },
  {
    id: 3,
    quote: "What stood out was how fast he moved without cutting corners. We went from brief to live site in 10 days. Our enquiries have noticeably increased since launch.",
    name: "Joy Sanaipei", role: "Creative Director", company: "OffGrid.ke", initial: "JS",
  },
];

function TestimonialCard({ testimonial, isActive, onClick }) {
  return (
    <div
      className={`testimonial-card cursor-pointer border transition-all duration-500 p-8 relative overflow-hidden ${
        isActive
          ? "border-ink dark:border-dm-accent bg-ink dark:bg-dm-card shadow-xl dark:shadow-dm-accent/10"
          : "border-rule dark:border-dm-border bg-canvas dark:bg-dm-surface hover:border-ink/40 dark:hover:border-dm-border/80"
      }`}
      style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s ease, transform 0.5s ease, background-color 0.4s ease, border-color 0.3s ease" }}
      onClick={onClick}
    >
      <span className={`absolute top-4 right-6 font-display font-black text-7xl leading-none select-none pointer-events-none ${
        isActive ? "text-canvas/10 dark:text-dm-text/5" : "text-rule dark:text-dm-border"
      }`}>"</span>

      <blockquote className={`font-body text-base leading-relaxed mb-8 relative z-10 ${
        isActive ? "text-canvas/90 dark:text-dm-text" : "text-ink-2 dark:text-dm-muted"
      }`}>
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-4 relative z-10">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0 ${
          isActive
            ? "bg-accent dark:bg-dm-accent text-canvas dark:text-white"
            : "bg-paper dark:bg-dm-card text-muted dark:text-dm-subtle border border-rule dark:border-dm-border"
        }`}>
          {testimonial.initial}
        </div>
        <div>
          <p className={`font-display font-bold text-sm ${isActive ? "text-canvas dark:text-dm-text" : "text-ink dark:text-dm-text"}`}>
            {testimonial.name}
          </p>
          <p className={`font-mono text-xs mt-0.5 ${isActive ? "text-canvas/50 dark:text-dm-subtle" : "text-muted dark:text-dm-subtle"}`}>
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
        {isActive && <span className="ml-auto font-mono text-xs text-accent dark:text-dm-accent">✦</span>}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".testimonial-card, .t-reveal").forEach((el, i) => {
            setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, i * 120);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-paper dark:bg-dm-surface border-t border-rule dark:border-dm-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-6 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="t-reveal flex items-center gap-4 mb-5" style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
              <span className="font-mono text-xs text-muted dark:text-dm-subtle uppercase tracking-widest">Client Feedback</span>
              <span className="flex-1 h-px bg-rule dark:bg-dm-border" />
            </div>
            <h2 className="t-reveal font-display font-black text-4xl md:text-6xl text-ink dark:text-dm-text leading-tight" style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
              What clients <em>actually say.</em>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="t-reveal font-body text-sm text-muted dark:text-dm-muted leading-relaxed" style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
              Feedback from clients who trusted us with their brands.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} isActive={active === i} onClick={() => setActive(i)} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                active === i ? "w-6 h-1.5 bg-ink dark:bg-dm-accent" : "w-1.5 h-1.5 bg-rule dark:bg-dm-border hover:bg-muted dark:hover:bg-dm-subtle"
              }`} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>

        <div className="t-reveal mt-14 pt-10 border-t border-rule dark:border-dm-border grid grid-cols-3 divide-x divide-rule dark:divide-dm-border"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
          {[{ value: "100%", label: "On-time delivery" }, { value: "< 2wks", label: "Average turnaround" }, { value: "5★", label: "Client satisfaction" }].map((stat) => (
            <div key={stat.label} className="px-6 text-center first:pl-0 last:pr-0">
              <p className="font-display font-black text-3xl text-accent dark:text-dm-accent">{stat.value}</p>
              <p className="font-mono text-xs text-muted dark:text-dm-subtle mt-1 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
