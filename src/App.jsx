import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
   <div className={darkMode ? "app dark-mode" : "app"}>

      <nav className="navbar">
        <h2>Nikita Macucule Portfolio</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
           <a href="#experience">Experience</a>
           <a href="#certificates">Certificates</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button
  className="theme-button"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>
      </nav>

      <section id="home" className="hero">
  <div className="hero-content">
    <p className="hero-label">HELLO, I'M</p>

    <h1>Nikita Macucule</h1>

    <h2>ICT Application Development Graduate</h2>

    <p className="hero-description">
      I am a software developer passionate about building practical,
      creative and user-friendly applications. I enjoy learning new
      technologies and turning ideas into working solutions.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-button">
        View My Projects
      </a>

      <a href="/cv/Nikita-Macucule-CV.pdf" className="secondary-button">
        Download CV
      </a>

      <a href="#contact" className="secondary-button">
        Contact Me
      </a>
    </div>
  </div>

  <div className="hero-image">
    <div className="profile-circle">
      <img
        src="/images/profile.JPG"
        alt="Nikita Macucule"
      />
    
      <a
  href="/cv/Nikita-Macucule-CV.pdf"
  target="_blank"
  rel="noreferrer"
  className="secondary-button"
>
  Download CV
</a>
    </div>
  </div>
</section>

      <section id="about" className="section about">
  <div className="about-text">
    <p className="section-label">ABOUT ME</p>

    <h2>Building, learning and growing through technology.</h2>

    <p>
      I am an ICT graduate with a Diploma in ICT: Application Development
      from the University of Mpumalanga. I am passionate about software
      development and enjoy turning ideas into practical applications.
    </p>

    <p>
      I have worked with technologies such as Java, JavaScript, React,
      PHP, C++, SQL, Node.js and MongoDB. I enjoy learning new technologies
      and challenging myself through real projects.
    </p>

    <p>
      I am currently continuing my studies through an Advanced Diploma in
      ICT while growing my skills as a software developer.
    </p>
  </div>

  <div className="about-card">
    <h3>Currently</h3>

    <p>🎓 Advanced Diploma in ICT Student</p>
    <p>💻 Building software projects</p>
    <p>📚 Learning new technologies</p>
    <p>🚀 Growing as a developer</p>
  </div>
</section>
<section id="education" className="section">
  <p className="section-label">EDUCATION</p>

  <h2>My Education</h2>

  <div className="education-card">
    <div>
      <h3>Advanced Diploma in ICT</h3>
      <p>University of Mpumalanga</p>
      <span>2026 – Present</span>
    </div>

    <div>
      <h3>Diploma in ICT: Application Development</h3>
      <p>University of Mpumalanga</p>
      <span>2023 – 2025</span>
    </div>
    <div>
      <h3>Matric</h3>
      <p>Magwagwaza Secondary</p>
      <span>2022</span>
    </div>
  </div>
</section>
<section id="experience" className="section">
  <p className="section-label">EXPERIENCE</p>

  <h2>My Experience</h2>

  <div className="experience-card">
    <div className="experience-header">
      <div>
        <h3>Freelancer Software Developer</h3>
        <p>Freelance</p>
      </div>

      <span>Feb 2023 – Present</span>
    </div>

    <ul>
      <li>
        Developed software projects based on client and project
        requirements.
      </li>

      <li>
        Worked with different programming languages and development
        technologies.
      </li>

      <li>
        Practised problem-solving, debugging and improving application
        functionality.
      </li>

      <li>
        Used Git and GitHub to manage and maintain software projects.
      </li>
    </ul>
  </div>
</section>
<section id="certificates" className="section">
  <p className="section-label">CERTIFICATES & ACHIEVEMENTS</p>

  <h2>My Certifications</h2>

  <div className="certificate-grid">

    <div className="certificate-card">
      <h3>Introduction to Java</h3>
      <p>SoloLearn</p>
    </div>

    <div className="certificate-card">
      <h3>Introduction to C++</h3>
      <p>SoloLearn</p>
    </div>

    <div className="certificate-card">
      <h3>Introduction to CSS</h3>
      <p>SoloLearn</p>
    </div>

    <div className="certificate-card">
      <h3>Data Science Tools</h3>
      <p>CognitiveClass</p>
    </div>

    <div className="certificate-card">
      <h3>Data Science 101</h3>
      <p>CognitiveClass</p>
    </div>

    <div className="certificate-card">
      <h3>Student Hackathon 2024</h3>
      <p>MAISH / University of Mpumalanga</p>
    </div>

    <div className="certificate-card">
      <h3>Student Hackathon 2025</h3>
      <p>Tshwane University of Technology</p>
    </div>

    <div className="certificate-card">
      <h3>NEMISA Digital Skills Programme</h3>
      <p>Digital Skills Training</p>
    </div>

  </div>
</section>

      <section id="skills" className="section">
  <p className="section-label">SKILLS</p>

  <h2>What I Work With</h2>

  <div className="skills-grid">

    <div className="skill-category">
      <h3>Programming</h3>

      <div className="skill-list">
        <span>Java</span>
        <span>JavaScript</span>
        <span>C++</span>
        <span>PHP</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Frontend</h3>

      <div className="skill-list">
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
        <span>React Native</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Backend & Database</h3>

      <div className="skill-list">
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
        <span>SQL</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Tools</h3>

      <div className="skill-list">
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
        <span>Expo</span>
      </div>
    </div>

  </div>
</section>
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">

          <div className="project-card">
            <div className="project-preview">
  <span>UMP NAVIGATION APP</span>
</div>
  <h3>UMP Navigation App</h3>

  <p>
    A campus navigation application developed for the University of
    Mpumalanga to help students and visitors find buildings and navigate
    around campus.
  </p>

  <p className="tech">
    React Native • Expo • Node.js • Express • MongoDB
  </p>

  <div className="project-buttons">
    <a
      href="https://github.com/Nikita77-ap/Ump-Nav-app"
      target="_blank"
      rel="noreferrer"
      className="project-button"
    >
      GitHub
    </a>

    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="project-button secondary-project-button"
    >
      Live Demo
    </a>
  </div>
</div>

         <div className="project-card">
          <div className="project-preview">
  <span>CODEDOJO</span>
</div>
  <h3>CodeDojo</h3>

  <p>
    An educational platform designed to help first-year programming
    students practise coding and get support while learning.
  </p>

  <p className="tech">
    React • Node.js • JavaScript
  </p>

  <div className="project-buttons">
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="project-button"
    >
      GitHub
    </a>

    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="project-button secondary-project-button"
    >
      Coming Soon
    </a>
  </div>
</div>

          <div className="project-card">
            <div className="project-preview">
  <span>SMART FARM ASSISTANT</span>
</div>
  <h3>Smart Farm Assistant</h3>

  <p>
    A smart agriculture project concept that uses digital tools and data
    to help farmers make better decisions.
  </p>

  <p className="tech">
    React • APIs • Data
  </p>

  <div className="project-buttons">
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="project-button"
    >
      GitHub
    </a>

    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="project-button secondary-project-button"
    >
      Coming Soon
    </a>
  </div>
</div>

        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Let's Connect</h2>

        <p>
          I am interested in software development, technology and
          opportunities to learn and grow.
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/Nikita77-ap"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/nikita-macucule/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Nikita Macucule</p>
      </footer>

    </div>
  );
}

export default App;