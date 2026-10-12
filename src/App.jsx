import { useEffect, useRef, useState } from "react";
import portfolioFallback from "../server/data/portfolio.json";
import "./App.css";

const App = () => {
  const [portfolio, setPortfolio] = useState(portfolioFallback);
  const projectsRef = useRef(null);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((response) => {
        if (!response.ok) throw new Error("Portfolio content could not be loaded.");
        return response.json();
      })
      .then(setPortfolio)
      .catch((requestError) => {
        console.error("Portfolio API unavailable; using bundled portfolio data.", requestError);
      });
  }, []);

  const scrollProjects = (amount) => projectsRef.current?.scrollBy({ left: amount, behavior: "smooth" });

  return (
    <div className="site-shell">
      <header className="nav container">
        <a className="wordmark" href="#top">{portfolio.name.split(" ")[0]}<span>.</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href={portfolio.resumeUrl} target="_blank" rel="noreferrer">Download CV <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero container">
          <p className="eyebrow">Available for backend & full-stack opportunities <span className="availability-dot" /></p>
          <h1>Building systems<br /><em>that scale.</em></h1>
          <div className="hero-bottom">
            <p className="hero-summary">{portfolio.summary}</p>
            <a className="text-link" href="#contact">Let&apos;s work together <span>↗</span></a>
          </div>
        </section>

        <section className="ticker" aria-label="Core technologies">
          <div className="ticker-track">{portfolio.ticker.concat(portfolio.ticker).map((item, index) => <span key={`${item}-${index}`}>{item} <b>✦</b></span>)}</div>
        </section>

        <section className="section container" id="work">
          <div className="section-heading"><p className="eyebrow">01 / Experience</p><h2>Where I&apos;ve made<br /><em>an impact.</em></h2></div>
          <div className="experience-list">
            {portfolio.experience.map((job) => (
              <article className="experience-item" key={`${job.company}-${job.role}`}>
                <div className="experience-meta"><span>{job.period}</span><span>{job.location}</span></div>
                <div className="experience-content"><h3>{job.role}</h3><p className="company">{job.company}</p><ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="skills">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">02 / Expertise</p><h2>Tools for the<br /><em>real world.</em></h2></div>
            <div className="skills-grid">{portfolio.skills.map((group) => <div className="skill-group" key={group.label}><p>{group.label}</p><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
          </div>
        </section>

        <section className="section container projects-section">
          <div className="section-heading project-heading"><div><p className="eyebrow">03 / Selected work</p><h2>Things I&apos;ve <em>shipped.</em></h2></div><div className="slider-controls"><button onClick={() => scrollProjects(-340)} aria-label="Previous project">←</button><button onClick={() => scrollProjects(340)} aria-label="Next project">→</button></div></div>
          <div className="projects-row" ref={projectsRef}>{portfolio.projects.map((project) => <a className="project-card" href={project.link} target="_blank" rel="noreferrer" key={project.title}><div className="project-art" style={{ background: project.color }}><span>{project.number}</span><strong>{project.shortName}</strong></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><span className="arrow">↗</span></div></a>)}</div>
        </section>

        <section className="section about-section container">
          <p className="eyebrow">04 / Beyond the code</p>
          <div className="about-grid"><h2>Curious by<br /><em>default.</em></h2><div><p>I care about the details people feel but rarely notice: a fast response, a resilient API, and a product that stays out of the way.</p><div className="education-list">{portfolio.education.map((item) => <div key={item.degree}><span>{item.period}</span><strong>{item.degree}</strong><small>{item.school}</small></div>)}</div></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="container"><p className="eyebrow">05 / Start a conversation</p><h2>Have a challenge<br /><em>worth solving?</em></h2><a className="email-link" href={`mailto:${portfolio.email}`}>{portfolio.email} <span>↗</span></a><div className="contact-footer"><span>{portfolio.location}</span><div>{portfolio.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.label}>{link.label}</a>)}</div></div></div></section>
      </main>
      <footer className="footer container"><span>© {new Date().getFullYear()} {portfolio.name}</span><span>Built with intention.</span></footer>
    </div>
  );
};

export default App;
