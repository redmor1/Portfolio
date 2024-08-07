import "./App.css";
import Project from "./components/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";

function App() {
  const descriptionFiller =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum dolor, quod atque, sed illo placeat possimus ipsa sint dignissimos sapiente provident, nostrum veritatis vel laudantium consectetur quaerat distinctio aliquam?";

  return (
    <main className="bg-[url('/noise.svg')] font-normal px-4 xs:px-8">
      <p className="text-white font-bold">Website in progress</p>
      <Navbar />
      <section className="mx-auto h-[75vh] max-w-6xl mb-24 text-center border-b-4 border-teal-950">
        <div className="max-w-xl mx-auto">
          <h1 className="font-display text-center font-bold w-full text-[7rem] xs:text-[8rem] sm:text-[10rem] sm:leading-[8rem] xs:leading-[8rem] leading-[6rem]  text-zinc-50 drop-shadow-2xl mb-8 ">
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
        <Project
          title="Brewer's Cookbook"
          description={descriptionFiller}
          imageUrl="/BrewersCookbook.webp"
          githubUrl=""
          projectUrl=""
        />
        <Project
          title="Ticket Bus"
          description={descriptionFiller}
          imageUrl="/TicketBus.webp"
          githubUrl=""
          projectUrl=""
        />
        <Project
          title="Brewer's Cookbook"
          description={descriptionFiller}
          imageUrl="/BrewersCookbook.webp"
          githubUrl=""
          projectUrl=""
        />
      </section>
      <section className="max-w-5xl mx-auto mb-12">
        <h1 className="text-zinc-50 text-7xl font-bold text-center my-12 font-display tracking">
          About me
        </h1>
        <div className="flex flex-col items-center justify-between text-zinc-300">
          <div className="max-w-xl text-lg leading-7 mb-12">
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
              systems.
            </p>
          </div>
          <div className="items-start flex justify-between max-w-xl w-full">
            <div className="max-w-[10rem] xs:max-w-xs">
              <h1 className="text-zinc-200 font-bold text-3xl font-display">
                Frontend
              </h1>
              <p className="text-zinc-400">
                JavaScript, TypeScript, React, Vite, Bootstrap, Tailwind
              </p>
            </div>
            <div className="max-w-[10rem] xs:max-w-xs">
              <h1 className="text-zinc-200 font-bold text-3xl font-display">
                Backend
              </h1>
              <p className="text-zinc-400">Java, Python, Spring Boot, Django</p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}

export default App;
