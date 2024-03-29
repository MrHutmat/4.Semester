import Backgroundeffect from "./components/Backgroundeffect";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <div className="text-themegray">
      <section id="home" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center relative">
        <About />
        <Backgroundeffect />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center relative">
        <Contact />
        <Backgroundeffect />
      </section>
    </div>
  );
}
