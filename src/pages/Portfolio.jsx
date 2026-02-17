import { Link } from 'react-router-dom'
import '../styles/ProjectPage.css'

function Portfolio() {
  return (
    <div className="project-page">
      <header>
        <Link to="/" className="back-link">&larr; Back</Link>
        <h1>Sami Silvan</h1>
        <nav>
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section className="project-detail">
          <img src="/Skirjain.png" alt="Portfolio" className="project-hero" />
          <h2>Personal Portfolio</h2>
          <p className="project-description">
            This portfolio website showcases my professional work and projects. Built with modern web technologies,
            it demonstrates my skills in frontend development, responsive design, and user experience.
          </p>
          
          <h3>Features</h3>
          <ul>
            <li>Responsive design that works on all devices</li>
            <li>Smooth navigation and page transitions</li>
            <li>Project showcase with detailed descriptions</li>
            <li>Contact information and social links</li>
            <li>Module-based component architecture</li>
          </ul>

          <h3>Technologies</h3>
          <p>React, Vite, React Router, CSS3</p>

          <h3>Purpose</h3>
          <p>
            Created to showcase my professional portfolio and demonstrate my capabilities as a software engineer.
            The site provides an interactive way for potential employers and collaborators to learn about my projects
            and experience.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Sami Silvan</p>
      </footer>
    </div>
  )
}

export default Portfolio
