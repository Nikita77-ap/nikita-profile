function About() {
  return (
    <section className="section about-page">

      <div className="about-heading">
        <p className="section-label">ABOUT ME</p>

        <h2>
          A girl who loves
          <span> technology & creativity.</span>
        </h2>

        <p className="about-intro">
          Developer, learner and creative at heart.
        </p>
      </div>

      <div className="about-layout">

        <div className="about-main-card">

          <div className="about-icon">✦</div>

          <h3>Hi, I'm Nikita 👋🏽</h3>

          <p>
            I am an ICT graduate from the University of Mpumalanga with a
            passion for software development and creating digital experiences.
          </p>

          <p>
            I enjoy building websites and applications that are useful,
            modern and easy to use. I love taking an idea and turning it into
            something people can actually interact with.
          </p>

          <p>
            I am naturally curious and always willing to learn. Technology
            keeps changing, and that is one of the things I enjoy most about
            being a developer.
          </p>

        </div>

        <div className="about-side">

          <div className="about-mini-card">
            <span>🎀</span>
            <div>
              <h4>Currently</h4>
              <p>Advanced Diploma in ICT</p>
            </div>
          </div>

          <div className="about-mini-card">
            <span>💻</span>
            <div>
              <h4>My Passion</h4>
              <p>Building software & websites</p>
            </div>
          </div>

          <div className="about-mini-card">
            <span>✨</span>
            <div>
              <h4>My Goal</h4>
              <p>Keep learning, creating & growing</p>
            </div>
          </div>

        </div>

      </div>

      <div className="about-values">

        <div>
          <span>01</span>
          <h3>Creative</h3>
          <p>I enjoy bringing ideas to life through technology.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Curious</h3>
          <p>I enjoy learning new technologies and exploring new ideas.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Driven</h3>
          <p>I believe in improving my skills one project at a time.</p>
        </div>

      </div>

    </section>
  );
}

export default About;