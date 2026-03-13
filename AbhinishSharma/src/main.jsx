import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Experience from "./assets/components/Experience";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
