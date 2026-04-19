import { Link } from 'react-router-dom'

function SyntheticHealthProject() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="relative p-8 text-center">
        <Link to="/" className="static md:absolute left-4 top-4 block md:inline-block mb-4 md:mb-0 text-black no-underline text-xl transition-opacity duration-300 hover:opacity-70">&larr; Back</Link>
        <h1 className="m-0 mb-4 text-xl md:text-2xl">Synthesizing data</h1>
      </header>
      <main className="flex-1 max-w-4xl mx-auto my-8 px-4 w-full">
        <section className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <img src="/synthetichealthdatapic.png" alt="Synthetic Health Data" className="w-full h-auto max-h-96 object-cover rounded-lg mb-6" />
          <h2 className="text-slate-700 mb-4 text-xl md:text-2xl">Synthetic Health Data</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            This was made for TAMK during the summer of 2025. The idea of the project was to make a poof of concept about a service that synthesizes data
             for usage in situations where original data cant be used. Such as medical data. The service works by asking for data from the user that needs to be synthesized. 
             That data is used to train an ai model that produces the new data for you. the original data and the model is removed after use. After getting the new synthesized data 
             user gets to compare it with the original data with graphs provided by the service. Service also includes automatic data redaction for personally identifying information 
             before data is used to create a new model.
          </p>
          
          <h3 className="text-slate-700 mt-8 mb-4 text-xl">Technologies</h3>
          <ul className="text-gray-600 leading-relaxed ml-6">
            <li className="mb-2">Flask</li>
            <li className="mb-2">Python</li>
            <li className="mb-2">pyTorch</li>
            <li className="mb-2">JavaScript</li>
          </ul>

        </section>
      </main>
      <footer className="text-center p-8 mt-8">
        <p>&copy; 2026 Sami Silvan</p>
      </footer>
    </div>
  )
}

export default SyntheticHealthProject
