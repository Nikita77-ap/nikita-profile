function Skills() {
  return (
    <section className="section">
      <p className="section-label"></p>

      <h2>SKILLS</h2>

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
  );
}

export default Skills;