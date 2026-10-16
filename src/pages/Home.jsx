function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-label">FRONT-END DEVELOPER</h1>

        <h1>Nikita Macucule</h1>

        <br />
        <br />

        <h2>ICT Application Development Graduate</h2>

        <p className="hero-description">
          I am a Front-End Developer passionate about creating modern,
          responsive and user-friendly websites and applications. I enjoy
          turning ideas into clean, functional digital experiences while
          continuously learning new technologies.
        </p>

        <div className="hero-buttons">
          <a href="/projects" className="primary-button">
            View My Projects
          </a>

          <a
            href="/cv/Nikita-Macucule-CV.pdf"
            className="secondary-button"
          >
            Download CV
          </a>

          <a href="/contact" className="secondary-button">
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
        </div>
      </div>
    </section>
  );
}

export default Home;