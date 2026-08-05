import React, { useEffect, useRef } from "react";

// ✏️ Add your photo or brand image:
// 1. Place image in /public folder e.g. public/brand-photo.jpg
// 2. Change PHOTO_SRC to "/brand-photo.jpg"
const PHOTO_SRC = "/profilephoto.JPG";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".h-reveal");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 130);
    });
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col justify-center pb-16 pt-28 overflow-hidden bg-canvas dark:bg-dm-bg">
      {/* Subtle dark mode background glow */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-dm-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-dm-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="h-reveal max-w-6xl mx-auto px-6 w-full mb-10 relative z-10">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-muted dark:text-dm-subtle tracking-widest uppercase">Creative Studio</span>
          <span className="font-mono text-xs text-muted dark:text-dm-subtle tracking-widest uppercase">Kenya</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <h1 className="h-reveal font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-ink dark:text-dm-text">
              We build fast,<br />
              <em className="text-accent dark:text-dm-accent not-italic">modern</em> sites<br />
              that turn visitors<br />
              into{" "}
              <span className="relative inline-block">
                customers.
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-highlight dark:bg-dm-amber opacity-60" />
              </span>
            </h1>

            <p className="h-reveal font-body text-base text-muted dark:text-dm-muted leading-relaxed mt-6 max-w-md">
              We help brands and businesses create clean, responsive websites using modern
              tools and AI-powered workflows delivered faster than you'd expect.
            </p>

            <div className="h-reveal flex flex-wrap gap-3 mt-8">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink dark:bg-dm-accent text-canvas dark:text-white font-body font-medium text-sm hover:bg-accent dark:hover:bg-dm-accent/80 transition-colors duration-300">
                View Our Work <span>↓</span>
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink dark:border-dm-border text-ink dark:text-dm-text font-body font-medium text-sm hover:border-accent dark:hover:border-dm-accent hover:text-accent dark:hover:text-dm-accent transition-colors duration-300">
                Let's Talk
              </a>
            </div>

            <div className="h-reveal flex items-center gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <span className="font-mono text-xs text-muted dark:text-dm-subtle">Available for new projects</span>
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="h-reveal relative">
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent/30 dark:border-dm-accent/20 z-0" />
              <div className="relative z-10 w-56 h-64 md:w-72 md:h-80 overflow-hidden bg-paper dark:bg-dm-surface border border-rule dark:border-dm-border dm-glow-subtle">
                {PHOTO_SRC ? (
                  <img src={PHOTO_SRC} alt="MJ Elite Creatives"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-paper dark:bg-dm-surface">
                    <div className="w-20 h-20 rounded-full bg-rule dark:bg-dm-card flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="15" r="8" fill="#8C8278" className="dark:fill-dm-subtle" />
                        <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#8C8278" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <p className="font-mono text-xs text-muted dark:text-dm-subtle text-center px-4 leading-relaxed">
                      Profile Photo
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-5 left-0 z-20 bg-ink dark:bg-dm-card dark:border dark:border-dm-border text-canvas dark:text-dm-text px-4 py-2">
                <p className="font-display font-bold text-sm leading-tight">MJ Elite Creatives</p>
                <p className="font-mono text-xs opacity-50 mt-0.5">Creative Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 md:right-12 font-display font-black text-[8rem] md:text-[10rem] leading-none text-rule/30 dark:text-dm-border/40 select-none pointer-events-none">01</div>
    </section>
  );
}
