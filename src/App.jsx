function App() {
  const currentYear = new Date().getFullYear();

  const projects = [
    {
      title: "Memora AI",
      type: "AI Infrastructure",
      description:
        "A continuity-first AI system with persistent user state, document retrieval, task management, deterministic tools, and planner-orchestrator architecture designed to make AI assistants remember and reason across interactions.",
      tech: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "Redis",
        "RAG",
        "Embeddings",
      ],
      github: "https://github.com/Rakshith-028/memora-ai",
      featured: true,
    },
    {
      title: "AEGIS Autonomous SRE",
      type: "Autonomous DevOps / SRE",
      description:
        "An autonomous incident-response system that collects evidence, performs root-cause analysis, creates incidents, evaluates policy, executes remediation actions, verifies recovery, and generates postmortems.",
      tech: [
        "Python",
        "Autonomous Agents",
        "RCA",
        "Incident Response",
        "Docker",
        "Observability",
      ],
      github: "https://github.com/Rakshith-028/aegis-autonomous-sre",
    },
    {
      title: "Clinic SaaS",
      type: "Full-Stack SaaS",
      description:
        "A SaaS-style clinic management platform with dashboards and structured workflows for clinic operations, built as a modern full-stack web application.",
      tech: ["Next.js", "React", "TypeScript", "SaaS", "Dashboard"],
      github: "https://github.com/Rakshith-028/clinic-saas",
    },
    {
      title: "FocusGuard",
      type: "Computer Vision Desktop App",
      description:
        "A Windows desktop productivity app that uses webcam-based computer vision to detect drowsiness and distraction during focused study sessions.",
      tech: [
        "Python",
        "PySide6",
        "OpenCV",
        "MediaPipe",
        "YOLO11",
        "Computer Vision",
      ],
      github: "https://github.com/Rakshith-028/focusguard",
    },
    {
      title: "CodePilot AI",
      type: "AI Developer Tool",
      description:
        "A local-first VS Code AI coding assistant that uses project context to detect code issues, explain code, and generate safer context-aware fixes directly inside the editor.",
      tech: [
        "TypeScript",
        "VS Code API",
        "RAG",
        "Embeddings",
        "Ollama",
        "AI Coding",
      ],
      github: "https://github.com/Rakshith-028/codepilot-ai",
    },
  ];

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
            I build AI systems, intelligent developer tools, autonomous
            software, and full-stack products that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work <span>↘</span>
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
            <h2>Building ambitious software with AI at the core.</h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p>
                I'm a B.Tech Artificial Intelligence & Machine Learning student
                focused on building systems that go beyond basic demos and
                tutorials.
              </p>

              <p>
                My work spans AI infrastructure, autonomous systems, developer
                tools, computer vision, and full-stack SaaS products.
              </p>

              <p>
                I enjoy working on projects where AI is part of the actual
                architecture — not just added as a chatbot layer.
              </p>
            </div>

            <div className="about-side">
              <div className="about-stat">
                <span>Primary Focus</span>
                <h3>AI Engineering</h3>
              </div>

              <div className="about-stat">
                <span>Building</span>
                <h3>AI Systems + Products</h3>
              </div>

              <div className="about-stat">
                <span>Interested In</span>
                <h3>Agents, Infrastructure & SaaS</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section reveal" id="projects">
          <div className="section-heading">
            <p>Selected Work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <article
                className={`portfolio-project ${
                  project.featured ? "featured-portfolio-project" : ""
                }`}
                key={project.title}
              >
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="portfolio-project-content">
                  <div className="project-title-row">
                    <div>
                      <span className="project-type">{project.type}</span>
                      <h3>{project.title}</h3>
                    </div>

                    {project.featured && (
                      <span className="featured-label">Flagship</span>
                    )}
                  </div>

                  <p>{project.description}</p>

                  <div className="project-features">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-btn"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
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
                <p>Python</p>
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>C++</p>
              </div>
            </div>

            <div className="skill-category">
              <span>02</span>
              <h3>AI Engineering</h3>

              <div className="skill-list">
                <p>RAG</p>
                <p>Embeddings</p>
                <p>Vector Search</p>
                <p>AI Agents</p>
              </div>
            </div>

            <div className="skill-category">
              <span>03</span>
              <h3>Full Stack</h3>

              <div className="skill-list">
                <p>React</p>
                <p>Next.js</p>
                <p>FastAPI</p>
                <p>REST APIs</p>
              </div>
            </div>

            <div className="skill-category">
              <span>04</span>
              <h3>Tools & Systems</h3>

              <div className="skill-list">
                <p>Git & GitHub</p>
                <p>PostgreSQL</p>
                <p>Redis</p>
                <p>Docker</p>
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
              I'm open to internships, AI engineering opportunities, software
              development roles, technical collaborations, and ambitious
              projects.
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