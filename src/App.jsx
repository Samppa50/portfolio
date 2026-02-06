import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>My Personal Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Filler text while I work on this! Filler text while I work on this! Filler text while I work on this!
            Filler text while I work on this! Filler text while I work on this! Filler text while I work on this!
            Filler text while I work on this! Filler text while I work on this! Filler text while I work on this!
            Filler text while I work on this! Filler text while I work on this! Filler text while I work on this!
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project synthetic-health-project" style={{backgroundImage: 'url(/synthetichealthdatapic.png)'}}>
              <h3>Synthtetic Health Data Project</h3>
              <p>A web app for synthesizing csv/xlsx data.</p>
            </div>
            <div className="project card-game" style={{backgroundImage: 'url(/cardgamepic.png)'}}>
              <h3>Card Game Project</h3>
              <p>Godot powered card game.</p>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: silvansami50@gmail.com</p>
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
