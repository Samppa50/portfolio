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
      <main className="flex flex-col gap-8">
        <section id="home" className="min-h-screen flex flex-col justify-center items-center p-8 text-center border-b border-gray-300" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-4">Sami Silvan</h2>
            <p className="text-lg mb-6">I build stuff.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#about" className="rounded-full border border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition">About</a>
              <a href="#projects" className="rounded-full border border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition">Projects</a>
              <a href="#contact" className="rounded-full border border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition">Contact</a>
            </div>
          </div>
        </section>
        <section id="about" className="min-h-screen p-8 border-b border-gray-300" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
          <h2 className="text-3xl mb-4">About</h2>
          <p>
            Software engineer with a bachelors degree in computer engineering from Tampere University of Applied Sciences.
          </p>
        </section>
        <section id="projects" className="min-h-screen p-8 border-b border-gray-300" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
          <h2 className="text-3xl mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <section id="contact" className="min-h-screen p-8" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
          <h2 className="text-3xl mb-8">Contact</h2>
          <p 
            onClick={() => navigator.clipboard.writeText('silvansami50@gmail.com')}
            className="cursor-pointer mb-2"
            title="Click to copy email"
          >
            Email: silvansami50@gmail.com - Click to copy!
          </p>
          <p className="mb-2">LinkedIn: <a href="https://www.linkedin.com/in/sami-silvan-1b898b267/" className="text-blue-600 hover:underline">Sami Silvan</a></p>
          <p>GitHub: <a href="https://github.com/Samppa50" className="text-blue-600 hover:underline">@Samppa50</a></p>
        </section>
      </main>
    </div>
  )
}

export default HomePage
