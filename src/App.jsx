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
            <div className="project">
              <h3>Project 1</h3>
              <p>A web app built with React and Vite.</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Another cool project.</p>
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
