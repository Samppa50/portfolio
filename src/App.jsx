import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SyntheticHealthProject from './pages/SyntheticHealthProject'
import CardGame from './pages/CardGame'
import Thesis from './pages/Thesis'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/synthetic-health" element={<SyntheticHealthProject />} />
        <Route path="/project/card-game" element={<CardGame />} />
        <Route path="/project/thesis" element={<Thesis />} />
        <Route path="/project/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
