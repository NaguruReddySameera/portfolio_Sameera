import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import GalaxyBackground from "./components/GalaxyBackground";


import "./App.css";

function App() {

  return (

    <div className="app">

      {/* ANIMATED BACKGROUND */}
  
          <GalaxyBackground />
      
      <Navbar />

      <Hero />

      <About />

      <Education />
      <Experience />

      <Achievements />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>

  );

}

export default App;