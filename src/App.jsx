import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>Nikita Macucule Portfolio</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Education">Education</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Experience">Experience</Link>
          <Link to="/Certificates">Certificates</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>

      <main>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/education" element={<Education />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/certificates" element={<Certificates />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</main>

      <footer>
        <p>© 2026 Nikita Macucule</p>
      </footer>

    </div>
  );
}

export default App;