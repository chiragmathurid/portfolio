import { useRef } from "react";
import "./App.css";

const App = () => {
  //Projects
  const projects = [
    {
      title: 'Startwith',
      desc: 'An AI Interviewer',
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      link: 'https://startwith.co/'
    },
    {
      title: 'Gridfigure',
      desc: 'A Portfolio Website',
      img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      link: 'https://gridfigure.vercel.app/'
    },
    {
      title: 'Headstart',
      desc: 'A Business Consultant Website',
      img: 'https://plus.unsplash.com/premium_photo-1723795245209-10e3b083ea9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://headstartco.netlify.app/'
    },
    {
      title: 'Dashboard',
      desc: 'An Interactive Dashboard',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://app-reactdashboard.netlify.app/'
    }
  ];

  const scrollRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 font-sans selection:bg-green-500 selection:text-white">
      {/* Navigation / Header */}
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-white">Chirag.</div>
        <button className="px-4 py-2 border border-gray-600 hover:border-green-400 hover:text-green-400 rounded-md transition duration-300 text-sm font-medium cursor-pointer">
          Download CV
        </button>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-24">

        {/* Hero Section */}
        <section className="space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Hi there 👋, I'm-<br />
            <span className="text-green-400">Chirag</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-400">
            Frontend Developer.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl">
            I design and develop beautiful things.
          </p>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            About Myself 👨‍💻
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Frontend Developer with 3 years of experience building scalable and high-performance web applications using
            React.js, Next.js, and modern JavaScript. Skilled in designing clean, responsive UI architectures, optimizing performance, and delivering user-centric solutions in fast-paced environments.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            My Tech Stack 💻
          </h3>
          <div className="flex flex-wrap gap-3">
            {['HTML 5', 'CSS 3', 'Javascript', 'Typescript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Material UI', 'Git', 'Github', 'Tailwind CSS', 'Redux Toolkit', 'Context API', 'Postman', 'Chrome DevTools', 'Lighthouse', 'Figma'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-green-400 hover:text-white transition duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          {/* Title + Arrows Row */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              My Projects 🚀
            </h3>

            {/* Arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}
                className="bg-white/10 backdrop-blur-md border border-gray-600 hover:border-green-400 p-2 w-10 h-10 rounded-full transition cursor-pointer"
              >
                ◀
              </button>
              <button
                onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}
                className="bg-white/10 backdrop-blur-md border border-gray-600 hover:border-green-400 p-2 w-10 h-10 rounded-full transition cursor-pointer"
              >
                ▶
              </button>
            </div>
          </div>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pt-2"
          >
            {projects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-70 bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer active:scale-95"
              >
                {/* Image */}
                <div className="h-60 w-full bg-gray-200">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm">
                    {project.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4 pb-12">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            Find me online 🌐
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Let's stay connected! Whether you want to chat code, collaborate on a project,
            or just say hi — you'll find me hanging out here. Drop a message anytime!
          </p>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/chiragmathurid" target="_blank" className="text-gray-400 hover:text-white transition underline underline-offset-4">GitHub</a>
            <a href="https://www.linkedin.com/in/chiragmathurid/" target="_blank"  className="text-gray-400 hover:text-white transition underline underline-offset-4">LinkedIn</a>
            <a href="mailto:chiragmathur.id@gmail.com" className="text-gray-400 hover:text-white transition underline underline-offset-4">Email</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        Made with 💚 by Chirag Mathur
      </footer>
    </div>
  );
};

export default App;