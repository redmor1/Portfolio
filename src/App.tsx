import "./App.css";
import Project from "./components/Project/Project";

function App() {
  return (
    <main className="h-min-[100vh] bg-[url('../public/noise.svg')] font-normal px-8">
      <nav className="flex justify-between max-w-6xl mx-auto mb-52 pt-16">
        <div>
          <p className="font-display text-neutral-50 font-extrabold text-5xl bg-teal-700 rounded-md px-2 py-1">
            MZ
          </p>
        </div>
        <div className="flex justify-between w-72 max-w-xl items-center">
          <a
            href="#"
            className="text-neutral-50 font-bold text-4xl font-display underline decoration-teal-500"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-neutral-50 font-bold text-4xl font-display underline decoration-teal-500"
          >
            Contact
          </a>
        </div>
      </nav>
      <section className="mx-auto h-[60vh] max-w-6xl mb-24 text-center flex justify-between">
        <div className="text-left max-w-xl">
          <h1 className="font-display font-bold text-9xl text-neutral-50 drop-shadow-xl mb-8">
            Matias Zarate
          </h1>
          <span className="block w-24 bg-teal-500 px-4 py-1.5"></span>
        </div>
        <div className="text-left max-w-sm">
          <div className="text-left max-w-xl">
            <div className="flex items-center">
              <h3 className="text-teal-500 text-lg font-bold mr-4 underline underline-offset-2 font-display tracking-wider">
                Web Developer
              </h3>
              <span className="w-24 bg-teal-500 inline-block h-1 align-middle"></span>
            </div>
          </div>
          <h1 className="text-neutral-100 text-5xl font-bold my-4">
            Based in Argentina
          </h1>
          <p className="text-neutral-300 mb-8 mt-4 text-lg font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            repellendus corrupti? Vero, exercitationem? Placeat earum temporibus
            sed? Iure, saepe autem tempore earum incidunt.
          </p>
          <a
            href="#"
            className="flex text-teal-500 font-bold my-3 underline font-display tracking-wider underline-offset-2"
          >
            Contact me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </section>
      <section id="projects">
        <h1 className="font-display text-neutral-50 text-9xl text-center mb-4">
          Projects
        </h1>
        <Project />
        <Project />
        <Project />
      </section>
    </main>
  );
}

export default App;
