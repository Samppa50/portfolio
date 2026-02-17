import { Link } from 'react-router-dom'
import '../styles/ProjectPage.css'

function SyntheticHealthProject() {
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
          <img src="/synthetichealthdatapic.png" alt="Synthetic Health Data" className="project-hero" />
          <h2>Synthetic Health Data</h2>
          <p className="project-description">
            A web application designed to synthesize realistic CSV and XLSX data for healthcare scenarios. 
            This tool helps developers and researchers generate synthetic health datasets for testing and 
            development purposes while maintaining data privacy and compliance standards.
          </p>
          
          <h3>Features</h3>
          <ul>
            <li>Support for both CSV and XLSX file formats</li>
            <li>Customizable data generation parameters</li>
            <li>Privacy-compliant synthetic data generation</li>
            <li>Batch processing capabilities</li>
          </ul>

          <h3>Technologies</h3>
          <p>React, Node.js, Express, Data Generation Libraries</p>

          <h3>Result</h3>
          <p>
            Successfully delivered a functional application that allows healthcare professionals and 
            developers to easily generate test datasets without compromising patient privacy.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Sami Silvan</p>
      </footer>
    </div>
  )
}

export default SyntheticHealthProject
