import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

export default function Home() {
    return (
   <div>
    <section id="home">
      <Hero />
    </section>
      
    <section id="about">
      <About />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="contact">
      <Contact />
    </section>

   </div>
    )
  }
  