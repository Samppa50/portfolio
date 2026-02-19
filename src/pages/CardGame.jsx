import { Link } from 'react-router-dom'

function CardGame() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="relative p-8 text-center">
        <Link to="/" className="static md:absolute left-4 top-4 block md:inline-block mb-4 md:mb-0 text-black no-underline text-xl transition-opacity duration-300 hover:opacity-70">&larr; Back</Link>
        <h1 className="m-0 mb-4 text-xl md:text-2xl">TODO</h1>
      </header>
      <main className="flex-1 max-w-4xl mx-auto my-8 px-4 w-full">
        <section className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <img src="/cardgamepic.png" alt="Card Game" className="w-full h-auto max-h-96 object-cover rounded-lg mb-6" />
          <h2 className="text-slate-700 mb-4 text-xl md:text-2xl">Card Game</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER
            FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER
            FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER
          </p>
          
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Features</h3>
          <ul className="text-gray-600 leading-relaxed ml-6">
            <li className="mb-2">FILLER TEXT</li>
            <li className="mb-2">FILLER TEXT</li>
            <li className="mb-2">FILLER TEXT</li>
            <li className="mb-2">FILLER TEXT</li>
          </ul>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Technologies</h3>
          <p className="text-gray-600 leading-relaxed">FILLER TEXT</p>

          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Result</h3>
          <p className="text-gray-600 leading-relaxed">
            FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER TEXT FILLER
          </p>
        </section>
      </main>
      <footer className="text-center p-8 mt-8">
        <p>&copy; 2026 Sami Silvan</p>
      </footer>
    </div>
  )
}

export default CardGame
