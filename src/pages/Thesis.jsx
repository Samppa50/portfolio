import { Link } from 'react-router-dom'
import '../styles/ProjectPage.css'

function Thesis() {
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
          <img src="/thesispic.png" alt="Thesis Project" className="project-hero" />
          <h2>Thesis Project - Combi Cool</h2>
          <p className="project-description">
            My professional thesis project completed for Combi Cool, demonstrating practical application 
            of computer engineering principles in an industrial setting. This project involved solving 
            real-world challenges and implementing production-grade solutions.
          </p>
          
          <h3>Overview</h3>
          <ul>
            <li>Requirements analysis and specification</li>
            <li>System architecture design</li>
            <li>Implementation and testing</li>
            <li>Documentation and deployment</li>
          </ul>

          <h3>Technologies</h3>
          <p>Various industrial software solutions and engineering tools</p>

          <h3>Outcome</h3>
          <p>
            Successfully completed thesis project that met all client requirements and demonstrated 
            practical engineering expertise. The solution was implemented and deployed in the production environment.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Sami Silvan</p>
      </footer>
    </div>
  )
}

export default Thesis
