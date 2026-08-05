import React, { useState } from "react";

// ✏️ UPDATE THESE with your real details
const EMAIL = "info@mjelitecreatives.com";
const WHATSAPP = "254717813478";
const FORMSPREE_URL = "https://formspree.io/f/xzdjlgjd";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-ink dark:bg-dm-surface text-canvas relative overflow-hidden">
      {/* Decorative element — desktop only */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-64 xl:w-96 hidden lg:flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden"
      >
        <span className="font-display font-black text-[10rem] xl:text-[14rem] leading-none text-canvas/[0.04] dark:text-dm-text/[0.03]">✦</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-canvas/40 dark:text-dm-subtle uppercase tracking-widest">Let's Talk</span>
            <span className="flex-1 h-px bg-canvas/10 dark:bg-dm-border" />
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl text-canvas dark:text-dm-text leading-tight">
            Have a project?<br />
            <em className="text-accent dark:text-dm-accent">Let's build it.</em>
          </h2>
          <p className="font-body text-base text-canvas/60 dark:text-dm-muted mt-6 max-w-md leading-relaxed">
            We're available for freelance projects. Websites, landing pages, web apps.
            Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: contact options */}
          <div className="space-y-4">
            <a href={`mailto:${EMAIL}`}
              className="group flex items-center justify-between p-5 border border-canvas/10 dark:border-dm-border hover:border-accent dark:hover:border-dm-accent hover:bg-accent/5 dark:hover:bg-dm-accent/5 transition-all duration-300">
              <div>
                <p className="font-mono text-xs text-canvas/40 dark:text-dm-subtle uppercase tracking-widest mb-1">Email</p>
                <p className="font-body text-sm text-canvas dark:text-dm-text font-medium">{EMAIL}</p>
              </div>
              <span className="text-canvas/30 dark:text-dm-subtle group-hover:text-accent dark:group-hover:text-dm-accent transition-colors text-xl">↗</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi%20MJ%20Elite%20Creatives%2C%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20discuss%20a%20project.`}
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 border border-canvas/10 dark:border-dm-border hover:border-green-400 dark:hover:border-green-500 hover:bg-green-400/5 dark:hover:bg-green-500/5 transition-all duration-300">
              <div>
                <p className="font-mono text-xs text-canvas/40 dark:text-dm-subtle uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="font-body text-sm text-canvas dark:text-dm-text font-medium">Chat directly on WhatsApp</p>
              </div>
              <span className="text-canvas/30 dark:text-dm-subtle group-hover:text-green-400 transition-colors text-xl">↗</span>
            </a>

            <div className="p-5 border border-canvas/10 dark:border-dm-border bg-canvas/3 dark:bg-dm-card/50">
              <p className="font-mono text-xs text-canvas/40 dark:text-dm-subtle uppercase tracking-widest mb-2">Response Time</p>
              <p className="font-body text-sm text-canvas/60 dark:text-dm-muted leading-relaxed">
                We typically respond within <span className="text-canvas dark:text-dm-text font-medium">24 hours</span> on weekdays.
                For urgent requests, WhatsApp is fastest.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="border border-canvas/10 dark:border-dm-border p-8 bg-canvas/3 dark:bg-dm-card">

            {/* Success state */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <span className="font-display font-bold text-5xl text-accent dark:text-dm-accent">✓</span>
                <p className="font-display font-bold text-xl text-canvas dark:text-dm-text">Message received.</p>
                <p className="font-body text-sm text-canvas/50 dark:text-dm-muted">We'll be in touch soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 font-mono text-xs text-canvas/40 dark:text-dm-subtle hover:text-canvas dark:hover:text-dm-text underline underline-offset-4 transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <p className="font-mono text-xs text-canvas/40 dark:text-dm-subtle uppercase tracking-widest mb-6">Send a Message</p>

                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "John Kamau" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-mono text-xs text-canvas/40 dark:text-dm-subtle uppercase tracking-widest mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={onChange}
                      required
                      placeholder={field.placeholder}
                      disabled={status === "loading"}
                      className="w-full bg-transparent border border-canvas/15 dark:border-dm-border px-4 py-3 text-canvas dark:text-dm-text text-sm placeholder-canvas/20 dark:placeholder-dm-subtle/50 focus:outline-none focus:border-accent dark:focus:border-dm-accent transition-colors duration-200 font-body disabled:opacity-50"
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-mono text-xs text-canvas/40 dark:text-dm-subtle uppercase tracking-widest mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={4}
                    placeholder="Briefly describe what you need built..."
                    disabled={status === "loading"}
                    className="w-full bg-transparent border border-canvas/15 dark:border-dm-border px-4 py-3 text-canvas dark:text-dm-text text-sm placeholder-canvas/20 dark:placeholder-dm-subtle/50 focus:outline-none focus:border-accent dark:focus:border-dm-accent transition-colors duration-200 resize-none font-body disabled:opacity-50"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="font-mono text-xs text-red-400 text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-accent dark:bg-dm-accent text-canvas dark:text-white font-body font-semibold text-sm hover:bg-accent/80 dark:hover:bg-dm-accent/80 transition-colors duration-300 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
