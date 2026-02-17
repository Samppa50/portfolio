import { Link } from 'react-router-dom'
import '../styles/ProjectPage.css'

function CardGame() {
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
          <img src="/cardgamepic.png" alt="Card Game" className="project-hero" />
          <h2>Card Game</h2>
          <p className="project-description">
            A fully-featured card game developed using the Godot game engine. This project demonstrates 
            game design, state management, and interactive gameplay mechanics with a polished user experience.
          </p>
          
          <h3>Features</h3>
          <ul>
            <li>Turn-based card game mechanics</li>
            <li>Player vs Computer gameplay</li>
            <li>Deck management system</li>
            <li>Score tracking and leaderboards</li>
            <li>Intuitive UI with animations</li>
          </ul>

          <h3>Technologies</h3>
          <p>Godot Engine, GDScript</p>

          <h3>Result</h3>
          <p>
            Developed a complete card game that showcases game development principles and provides 
            an engaging gameplay experience with smooth mechanics and responsive controls.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Sami Silvan</p>
      </footer>
    </div>
  )
}

export default CardGame
