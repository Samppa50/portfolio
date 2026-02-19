import { Link } from 'react-router-dom'

function HomePage() {
  const projects = [
    {
      id: 'synthetic-health',
      title: 'Synthtetic Health Data',
      description: 'A web app for synthesizing csv/xlsx data.',
      image: '/synthetichealthdatapic.png'
    },
    {
      id: 'card-game',
      title: 'Card Game',
      description: 'Godot powered card game.',
      image: '/cardgamepic.png'
    },
    {
      id: 'thesis',
      title: 'Thesis',
      description: 'Thesis project I made for Combi Cool.',
      image: '/thesispic.png'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'The very page you are on.',
      image: '/Skirjain.png'
    }
  ]

  return (
    <div className="w-4/5 flex flex-col mx-auto my-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl mb-2.5">Sami Silvan</h1>
        <nav className="flex justify-center gap-5">
          <a href="#about" className="no-underline text-black font-bold hover:underline">About</a>
          <a href="#projects" className="no-underline text-black font-bold hover:underline">Projects</a>
          <a href="#contact" className="no-underline text-black font-bold hover:underline">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col gap-8">
        <section id="about" className="p-4 border-b border-gray-300">
          <h2 className="text-3xl mb-4">About</h2>
          <p>
            Software engineer with a batchelor's degree in computer engineering from Tampere university of applied siences.
          </p>
        </section>
        <section id="projects" className="p-4 border-b border-gray-300">
          <h2 className="text-3xl mb-4">Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`} 
                className="no-underline text-inherit transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg block"
              >
                <div 
                  className="border border-gray-300 p-4 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl min-h-64 flex flex-col justify-end bg-cover bg-center bg-no-repeat"
                  style={{backgroundImage: `url(${project.image})`}}
                >
                  <h3 className="bg-black/70 text-white p-2 m-2">{project.title}</h3>
                  <p className="bg-black/70 text-white p-2 m-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section id="contact" className="p-4">
          <h2 className="text-3xl mb-4">Contact</h2>
          <p 
            onClick={() => navigator.clipboard.writeText('silvansami50@gmail.com')}
            className="cursor-pointer"
            title="Click to copy email"
          >
            Email: silvansami50@gmail.com
          </p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/sami-silvan-1b898b267/">Sami Silvan</a></p>
          <p>GitHub: <a href="https://github.com/Samppa50">@Samppa50</a></p>
        </section>
      </main>
      <footer className="text-center mt-8 p-4 border-t border-gray-300">
        <p>&copy; 2026 Sami Silvan</p>
      </footer>
    </div>
  )
}

export default HomePage
