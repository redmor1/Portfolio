import "./App.css";
import Project from "./components/Project/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProjectReverseTemp from "./components/Project/ProjectReverseTemp";

function App() {
  return (
    <main className="h-min-[100vh] bg-[url('../public/noise.svg')] font-normal px-8">
      <nav className="flex justify-between max-w-6xl mx-auto mb-52 pt-16">
        <div>
          <a className="font-display text-neutral-100 text-2xl border-teal-400 border-4 rounded-md px-2 py-1 block">
            VIEW RESUME
          </a>
        </div>
        <div className="flex justify-between w-56 max-w-xl items-center">
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
      <section className="mx-auto h-[60vh] max-w-6xl mb-24 text-center flex justify-between border-b-4 border-teal-950">
        <div className="text-left max-w-xl">
          <h1 className="font-display font-bold text-9xl text-neutral-50 drop-shadow-xl mb-8">
            Matias Zarate
          </h1>
          <span className="block w-24 bg-teal-400 px-4 py-1.5"></span>
          <div className="flex my-8">
            <a href="https://github.com/redmor1">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl text-neutral-100 rounded-md mr-6"
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/matias-zarate-developer/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-4xl text-neutral-100 rounded-md "
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="text-left max-w-sm">
          <div className="text-left max-w-xl">
            <div className="flex items-center">
              <h3 className="text-teal-400 text-lg font-bold mr-4 underline-offset-2 font-display tracking-wider">
                Web Developer
              </h3>
              <span className="w-24 bg-teal-400 inline-block h-1 align-middle"></span>
            </div>
          </div>
          <h1 className="text-neutral-200 italic text-4xl font-bold my-4">
            Full Stack Developer from Argentina
          </h1>
          <p className="text-neutral-400 mb-8 mt-4 text-md font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            repellendus corrupti? Vero, exercitationem? Placeat earum temporibus
            sed? Iure, saepe autem tempore earum incidunt.
          </p>
          <a
            href="#"
            className="flex text-neutral-50 font-bold my-3 font-display tracking-wider underline-offset-2 border-2 border-teal-500 w-32 py-1.5 px-2 rounded-md text-center justify-center text-lg"
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
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </a>
        </div>
      </section>
      <section
        id="projects"
        className="border-b-4 border-teal-950 max-w-6xl mx-auto"
      >
        <h1 className="font-display text-neutral-50 text-9xl text-center mb-24">
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
