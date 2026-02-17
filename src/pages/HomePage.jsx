import { Link } from 'react-router-dom'
import '../App.css'

function HomePage() {
  const projects = [
    {
      id: 'synthetic-health',
      title: 'Synthtetic Health Data',
      description: 'A web app for synthesizing csv/xlsx data.',
      image: '/synthetichealthdatapic.png',
      className: 'synthetic-health-project'
    },
    {
      id: 'card-game',
      title: 'Card Game',
      description: 'Godot powered card game.',
      image: '/cardgamepic.png',
      className: 'card-game'
    },
    {
      id: 'thesis',
      title: 'Thesis',
      description: 'Thesis project I made for Combi Cool.',
      image: '/thesispic.png',
      className: 'thesis'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'The very page you are on.',
      image: '/Skirjain.png',
      className: 'portfolio-project'
    }
  ]

  return (
    <div className="portfolio">
      <header>
        <h1>Sami Silvan</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About</h2>
          <p>
            Software engineer with a batchelor's degree in computer engineering from Tampere university of applied siences.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`} 
                className="project-link"
              >
                <div 
                  className={`project ${project.className}`}
                  style={{backgroundImage: `url(${project.image})`}}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p 
            onClick={() => navigator.clipboard.writeText('silvansami50@gmail.com')}
            style={{ cursor: 'pointer' }}
            title="Click to copy email"
          >
            Email: silvansami50@gmail.com
          </p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/sami-silvan-1b898b267/">Sami Silvan</a></p>
          <p>GitHub: <a href="https://github.com/Samppa50">@Samppa50</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Sami Silvan</p>
      </footer>
    </div>
  )
}

export default HomePage
