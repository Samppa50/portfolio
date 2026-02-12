import './App.css'

function App() {
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
            <div className="project synthetic-health-project" style={{backgroundImage: 'url(/synthetichealthdatapic.png)'}}>
              <h3>Synthtetic Health Data</h3>
              <p>A web app for synthesizing csv/xlsx data.</p>
            </div>
            <div className="project card-game" style={{backgroundImage: 'url(/cardgamepic.png)'}}>
              <h3>Card Game</h3>
              <p>Godot powered card game.</p>
            </div>
            <div className="project thesis" style={{backgroundImage: 'url(/thesispic.png)'}}>
              <h3>Thesis</h3>
              <p>Thesis project I made for Combi Cool.</p>
            </div>
            <div className="project portfolio-project" style={{backgroundImage: 'url(/Skirjain.png)'}}>
              <h3>Portfolio</h3>
              <p>The very page you are on.</p>
            </div>
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

export default App
