import expenseTrackerImg from "./assets/expense-tracker.png";
import codepilotImg from "./assets/codepilot-ai.png";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo">
          Rakshith<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="resume-btn resume-disabled">Resume Soon</span>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-badge">
            <span className="status-dot"></span>
            Open to internships & opportunities
          </div>

          <p className="intro">Hi, I'm Rakshith.</p>

          <h1>
            AI/ML Engineer
            <br />
            <span>& Software Developer</span>
          </h1>

          <p className="hero-description">
            I build intelligent software, developer tools, and full-stack
            applications that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
              <span>↘</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>
          </div>

          <div className="hero-bottom">
            <div className="education">
              <span className="small-label">Currently</span>
              <p>B.Tech Artificial Intelligence & Machine Learning</p>
              <span>VIPS, GGSIPU</span>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Rakshith-028"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/rakshith-thakur-b8142b349/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://leetcode.com/u/N82hc7WxZq/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode ↗
              </a>
            </div>
          </div>
        </section>

        <section className="about-section reveal" id="about">
          <div className="section-heading">
            <p>About Me</p>
            <h2>Building things that actually matter.</h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p>
                I'm a B.Tech Artificial Intelligence & Machine Learning student
                focused on building software that combines AI, strong
                engineering, and practical usability.
              </p>

              <p>
                I enjoy working on developer tools, intelligent systems,
                full-stack applications, and understanding how software works
                beyond just the interface.
              </p>

              <p>
                My current focus is on AI engineering, software development,
                data structures and algorithms, APIs, and project-level system
                design.
              </p>
            </div>

            <div className="about-side">
              <div className="about-stat">
                <span>Focus</span>
                <h3>AI Engineering</h3>
              </div>

              <div className="about-stat">
                <span>Currently</span>
                <h3>B.Tech AIML</h3>
              </div>

              <div className="about-stat">
                <span>Interested In</span>
                <h3>Software + AI</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section reveal" id="projects">
          <div className="section-heading">
            <p>Featured Project</p>
            <h2>CodePilot AI</h2>
          </div>

          <div className="featured-project">
            <div className="project-content">
              <span className="project-tag">AI Developer Tool</span>

              <h3>Local-first AI coding assistant for VS Code</h3>

              <p>
                CodePilot AI is an AI-powered VS Code extension designed to
                understand project context, detect syntax and code issues,
                explain functions, and provide safer, context-aware coding
                assistance directly inside the editor.
              </p>

              <div className="project-features">
                <span>TypeScript</span>
                <span>VS Code API</span>
                <span>Project Context</span>
                <span>Error Detection</span>
                <span>AI Fix Suggestions</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Rakshith-028/codepilot-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  View GitHub
                </a>
              </div>
            </div>

            <div className="project-visual">
              <div className="project-preview codepilot-preview">
                <img
                  src={codepilotImg}
                  alt="CodePilot AI VS Code extension screenshot"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="other-projects reveal">
          <div className="section-heading">
            <p>More Work</p>
            <h2>Other Projects</h2>
          </div>

          <div className="project-grid">
            <div className="project-card expense-project">
              <div className="expense-preview">
                <img
                  src={expenseTrackerImg}
                  alt="Expense Tracker Pro dashboard"
                />
              </div>

              <div className="project-card-top">
                <span>Web Application</span>
                <span>↗</span>
              </div>

              <h3>Expense Tracker Pro</h3>

              <p>
                A personal finance dashboard for tracking transactions,
                budgets, recurring expenses, analytics, monthly spending,
                import/export, and dark mode through a clean responsive
                interface.
              </p>

              <div className="project-features">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Local Storage</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Rakshith-028/EXPENSE-TRACKER"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  GitHub
                </a>

                <span className="primary-btn disabled-btn">Demo Soon</span>
              </div>
            </div>

            <div className="coming-project">
              <span>Currently Building</span>

              <h3>More ambitious projects are on the way.</h3>

              <p>
                I'm continuously experimenting with AI engineering, system
                design, full-stack development, and developer tooling.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section reveal" id="skills">
          <div className="section-heading">
            <p>What I Work With</p>
            <h2>Skills & Technologies</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <span>01</span>
              <h3>Languages</h3>

              <div className="skill-list">
                <p>C++</p>
                <p>Python</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
              </div>
            </div>

            <div className="skill-category">
              <span>02</span>
              <h3>Frontend</h3>

              <div className="skill-list">
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Responsive Design</p>
              </div>
            </div>

            <div className="skill-category">
              <span>03</span>
              <h3>AI Engineering</h3>

              <div className="skill-list">
                <p>RAG</p>
                <p>Embeddings</p>
                <p>Ollama</p>
                <p>LangChain</p>
              </div>
            </div>

            <div className="skill-category">
              <span>04</span>
              <h3>Developer Tools</h3>

              <div className="skill-list">
                <p>Git & GitHub</p>
                <p>VS Code API</p>
                <p>npm</p>
                <p>REST APIs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="education-section reveal">
          <div className="section-heading">
            <p>Education</p>
            <h2>Academic Background</h2>
          </div>

          <div className="education-card">
            <div>
              <span className="education-label">Degree</span>

              <h3>B.Tech in Artificial Intelligence & Machine Learning</h3>

              <p>Vivekananda Institute of Professional Studies</p>
              <p>Guru Gobind Singh Indraprastha University</p>
            </div>

            <div className="education-meta">
              <div>
                <span>Expected Graduation</span>
                <strong>2028</strong>
              </div>

              <div>
                <span>CGPA</span>
                <strong>9.88 / 10</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div className="contact-box">
            <p className="contact-small">Let's build something useful.</p>

            <h2>
              Have an opportunity,
              <br />
              idea, or project?
            </h2>

            <p className="contact-description">
              I'm open to internships, software engineering opportunities,
              AI/ML projects, collaborations, and interesting technical
              conversations.
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:rakshith0228@gmail.com"
                className="primary-btn"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/rakshith-thakur-b8142b349/"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Rakshith-028"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {currentYear} Rakshith. Built with React.</p>

        <div className="footer-links">
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;