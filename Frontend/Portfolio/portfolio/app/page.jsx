import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <div className="text-themegray z-0">
      <Hero />

      <About />

      <Projects />

      <Contact />
    </div>
  );
}
