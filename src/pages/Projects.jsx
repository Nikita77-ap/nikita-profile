function Projects() {
  return (
    <section className="section">
      <p className="section-label"></p>

      <h2>PROJECTS</h2>

      <div className="projects">

        {/* UMP Navigation App */}
        <div className="project-card">
          <div className="project-preview">
            <span>UMP NAVIGATION APP</span>
          </div>

          <h3>UMP Navigation App</h3>

          <p>
            A campus navigation application developed for the University of
            Mpumalanga to help students and visitors find buildings and
            navigate around campus.
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

        {/* CodeDojo */}
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

        {/* Smart Farm Assistant */}
        <div className="project-card">
          <div className="project-preview">
            <span>SMART FARM ASSISTANT</span>
          </div>

          <h3>Smart Farm Assistant</h3>

          <p>
            A smart agriculture project concept that uses digital tools and
            data to help farmers make better decisions.
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
  );
}

export default Projects;