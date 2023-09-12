import "./App.css";
import Project from "./components/Project/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProjectReverseTemp from "./components/Project/ProjectReverseTemp";

function App() {
  return (
    <main className="h-min-[100vh] bg-[url('../public/noise.svg')] font-normal px-8">
      <nav className="flex justify-between max-w-6xl mx-auto mb-36 pt-16">
        <div>
          <a className="font-display text-neutral-100 text-2xl border-teal-200 border-4 rounded-md px-2 py-1 block">
            VIEW RESUME
          </a>
        </div>
        <div className="flex justify-between w-72 max-w-xl items-center">
          <a href="https://github.com/redmor1">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-3xl text-neutral-100 rounded-md"
            ></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/matias-zarate-developer/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl text-neutral-100 rounded-md "
            ></FontAwesomeIcon>
          </a>

          <a
            href="#"
            className="text-neutral-100 font-bold text-2xl font-display rounded-md"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-neutral-100 font-bold text-2xl font-display rounded-md"
          >
            Contact
          </a>
        </div>
      </nav>
      <section className="mx-auto h-[75vh] max-w-7xl mb-24 text-center border-b-4 border-teal-950">
        <div className="max-w-xl mx-auto">
          <h1 className="font-display text-center font-bold w-full text-[10rem] leading-[8rem] text-neutral-50 drop-shadow-xl mb-8">
            Matias Zarate
          </h1>
          <div className="flex items-center justify-center mb-6">
            <h3 className="text-teal-200 text-xl font-bold mr-4 underline-offset-2 font-display tracking-wider">
              Web Developer
            </h3>
            <span className="w-24 bg-teal-200 inline-block h-1 align-middle"></span>
          </div>
        </div>
        <div className="text-left max-w-sm mx-auto">
          <div className="text-left max-w-xl"></div>
          <h1 className="text-neutral-200 italic text-4xl font-bold my-4">
            Full Stack Developer from Argentina
          </h1>
          <p className="text-neutral-400 mb-8 mt-4 text-md font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            repellendus corrupti? Vero, exercitationem? Placeat earum temporibus
            sed? Iure, saepe autem tempore earum incidunt.
          </p>
        </div>
      </section>
      <section
        id="projects"
        className="border-b-4 border-teal-950 max-w-6xl mx-auto"
      >
        <h1 className="font-display text-neutral-400 text-7xl text-center mb-24">
          Projects
        </h1>
        <Project />
        <ProjectReverseTemp />
        <Project />
      </section>
    </main>
  );
}

export default App;
