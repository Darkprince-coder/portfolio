import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useDarkMode from "./hooks/useDarkMode";

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="grain">
      <Navbar isDark={isDark} toggleDark={toggle} />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Testimonials />
        <Process />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
