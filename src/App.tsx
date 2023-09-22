import "./App.css";
import Project from "./components/Project/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProjectReverseTemp from "./components/Project/ProjectReverseTemp";

function App() {
  return (
    <main className="bg-[url('../public/noise.svg')] font-normal px-8">
      <nav className="flex justify-between max-w-6xl mx-auto mb-36 pt-16">
        <div>
          <a
            href="#"
            className="font-display hover:bg-teal-600   text-zinc-100 text-2xl border-teal-600 border-4 rounded-md px-2 py-1 block transition-colors ease-linear duration-200"
          >
            VIEW RESUME
          </a>
        </div>
        <div className="flex justify-between w-72 max-w-xl items-center">
          <a
            href="https://github.com/redmor1"
            className="hover:bg-teal-600 text-zinc-100 p-1 rounded-xl transition-colors ease-in-out duration-200"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-3xl"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/matias-zarate-developer/"
            className="hover:bg-teal-600 text-zinc-100 py-1 px-1.5 rounded-xl transition-colors ease-in-out duration-200"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl"
            ></FontAwesomeIcon>
          </a>

          <a
            href="#"
            className="text-zinc-100 font-bold text-2xl font-display rounded-md
            relative
            before:content-['']
            before:absolute
            before:-bottom-0.5
            before:left-0
            before:w-0
            before:h-[0.1875rem]
            before:duration-200
            before:opacity-0
            before:transition-all
            before:bg-teal-500
            hover:before:w-full
            hover:before:opacity-100
"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-zinc-100 font-bold text-2xl font-display rounded-md
            relative
            before:content-['']
            before:absolute
            before:-bottom-0.5
            before:left-0
            before:w-0
            before:h-[0.1875rem]
            before:duration-200
            before:opacity-0
            before:transition-all
            before:bg-teal-500
            hover:before:w-full
            hover:before:opacity-100"
          >
            Contact
          </a>
        </div>
      </nav>
      <section className="mx-auto h-[75vh] max-w-7xl mb-24 text-center border-b-4 border-teal-950">
        <div className="max-w-xl mx-auto">
          <h1 className="font-display text-center font-bold w-full text-[10rem] leading-[8rem] text-zinc-50 drop-shadow-2xl mb-8">
            Matias Zarate
          </h1>
          <div className="flex items-center justify-center mb-6">
            <h3 className="text-teal-200 text-xl font-bold mr-4 underline-offset-2 font-display tracking-wider">
              Web Developer
            </h3>
            <span className="w-[15.70rem] bg-teal-200 inline-block h-1 align-middle"></span>
          </div>
        </div>
        <div className="text-left max-w-sm mx-auto">
          <div className="text-left max-w-xl"></div>
          <h1 className="text-zinc-200 italic text-4xl font-bold my-4">
            Full Stack Developer from Argentina
          </h1>
          <p className="text-zinc-400 mb-8 mt-4 text-md font-normal">
            Welcome! Leveraging a unique blend of competitive e-sports and
            programming, I’m all about teamwork, communication, and technical
            prowess. Passionate about crafting efficient, user-friendly web
            solutions. Dive in to explore my journey in web development.
          </p>
        </div>
      </section>
      <section
        id="projects"
        className="border-b-4 border-teal-950 max-w-6xl mx-auto"
      >
        {/* <h1 className="font-display text-zinc-50 text-7xl text-center mb-24">
          Projects
        </h1> */}
        <Project />
        <ProjectReverseTemp />
        <Project />
      </section>
      <section className="max-w-5xl mx-auto mb-12">
        <h1 className="text-zinc-50 text-7xl font-bold text-center my-12 font-display tracking">
          About me
        </h1>
        <div className="flex justify-between text-zinc-300">
          <div className="max-w-xl text-lg leading-7">
            <p className="mb-2 border-b-zinc-700 border-b-4 pb-4">
              What to tell you about myself? I have a background in e-sports
              competition, so i'm no stranger to teamwork, good communication
              and do-or-die moments.
            </p>
            <p className="mb-2 ">
              I was introduced to programming by a bootcamp called
              "Informatorio" where you are taught the basics from a practical
              job-ready stance.
            </p>
            <p className="mb-2">
              Since then i've been striving to be as complete as possible as a
              developer, going from Frontend to Backend, peppering some Testing,
              UI and UX to get a clearer picture of the ecosystem and improve my
              skills.
            </p>
            <p className="mb-2 border-b-zinc-700 border-b-4 pb-4">
              I'm a usual frequenter of dev communities such as
              /r/ExperiencedDevs, /r/cscareerquestions, etc... what better way
              to improve as a developer and make less mistakes than read the
              thoughts/tips/experiences of developers with years of experience?
            </p>
            <p className="mb-2">
              In 2024, I plan to enroll into university to earn an associate's
              degree in programming, this will deepen my understanding of
              mathematics and programming, particularly the inner working of
              systems. Meanwhile, I'll keep honing my skills through personal
              projects.
            </p>
          </div>
          <div>
            <h1 className="text-zinc-200 font-bold text-3xl font-display">
              Frontend
            </h1>
            <p className="text-zinc-400">
              JavaScript, TypeScript, React, Vite, Bootstrap, Tailwind
            </p>
            <h1 className="text-zinc-200 font-bold text-3xl mt-5 font-display">
              Backend
            </h1>
            <p className="text-zinc-400">Java, Python, Spring Boot, Django</p>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <a
          href="mailto:matiaszaratedeveloper@gmail.com"
          className="inline-block text-zinc-50 font-bold font-display text-9xl bg-teal-950 py-8 mt-12 px-16 rounded-lg text-center max-w-6xl mx-auto mb-16"
        >
          Wanna talk?
        </a>
      </div>
    </main>
  );
}

export default App;
