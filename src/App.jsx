import "./App.css";

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>Nikita.</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
           <a href="#experience">Experience</a>
           <a href="#certificates">Certificates</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
  <div className="hero-content">
    <p className="hero-label">HELLO, I'M</p>

    <h1>Nikita Macucule</h1>

    <h2>ICT Graduate & Software Developer</h2>

    <p className="hero-description">
      I enjoy building practical software solutions, learning new
      technologies and turning ideas into working applications.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-button">
        View My Work
      </a>

      <a href="#contact" className="secondary-button">
        Let's Connect
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
        <h2>Skills</h2>

        <div className="skills">
          <span>Java</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>PHP</span>
          <span>C++</span>
          <span>SQL</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">

          <div className="project-card">
            <h3>UMP Navigation App</h3>
            <p>
              A campus navigation application developed to help students
              and visitors navigate the University of Mpumalanga campus.
            </p>
          </div>

          <div className="project-card">
            <h3>CodeDojo</h3>
            <p>
              An educational platform concept designed to help students
              improve their programming skills.
            </p>
          </div>

          <div className="project-card">
            <h3>Smart Farm Assistant</h3>
            <p>
              A technology project focused on helping farmers use digital
              tools and information to make better decisions.
            </p>
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