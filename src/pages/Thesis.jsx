import { Link } from 'react-router-dom'

function Thesis() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="relative p-8 text-center">
        <Link to="/" className="static md:absolute left-4 top-4 block md:inline-block mb-4 md:mb-0 text-black no-underline text-xl transition-opacity duration-300 hover:opacity-70">&larr; Back</Link>
        <h1 className="m-0 mb-4 text-xl md:text-2xl">Thesis</h1>
      </header>
      <main className="flex-1 max-w-4xl mx-auto my-8 px-4 w-full">
        <section className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <img src="/thesispic.png" alt="Thesis Project" className="w-full h-auto max-h-96 object-cover rounded-lg mb-6" />
          <h2 className="text-slate-700 mb-4 text-xl md:text-2xl">Thesis Project - Combi Cool</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            My thiesis project is a web application which is meant to help customers of Combi Cool to make and modify shopping lists. The tool is best used in bigger projects
            and thus its made to be easy to use even when large projects include a lot of data.
          </p>
          
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Technologies
          </h3>
          <ul className="text-gray-600 leading-relaxed ml-6">
            <li className="mb-2">Flask</li>
            <li className="mb-2">SQL</li>
            <li className="mb-2">JavaScipt</li>
          </ul>

        </section>
      </main>
      <footer className="text-center p-8 mt-8">
        <p>&copy; 2026 Sami Silvan</p>
      </footer>
    </div>
  )
}

export default Thesis
