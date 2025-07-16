import "./App.css";
import Project from "./components/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import ProjectReverseTemp from "./components/Project/ProjectReverseTemp";

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
            Frontend-focused fullstack developer from Argentina
          </h1>
          <p className="text-zinc-400 mb-8 mt-4 text-md font-normal">
            I've got a solid foundation in building maintainable interfaces,
            reusable components, and responsive layouts using modern frontend
            tools. I value teamwork, clear communication, and keeping projects
            moving through practical, hands-on development.
          </p>
        </div>
      </section>
      <section
        id="projects"
        className="border-b-4 border-teal-950 max-w-6xl mx-auto"
      >
        <h1 className="font-display text-zinc-50 text-7xl text-center mb-24">
          Projects
        </h1>
        <Project
          logo={
            <img
              src="./sentirsebien-logo.png"
              className="h-36 mt-2"
              alt="logo"
            />
          }
          description={
            "Web application for a spa. It allows managing appointment bookings with availability control, service cart, user settings, and an admin panel. Includes authentication, different roles with separate views (client, professional, administrator), and real-time appointment handling logic."
          }
          imageUrl="/sentirsebien.webp"
          githubUrl="https://github.com/redmor1/Spa-SentirseBien"
          projectUrl="https://spa-sentirse-bien-eta.vercel.app/"
          tags={[
            "React",
            "Vite",
            "JavaScript",
            "Tailwind",
            "Node.js",
            "Express",
            "Prisma",
            "MySQL",
          ]}
        />
        <Project
          logo={
            <img src="./eolonotas-logo.png" className="h-40 mt-6" alt="logo" />
          }
          description={
            "Mobile flashcard app inspired by Anki, built with React Native and local SQLite storage. Uses the SM-2 algorithm for efficient spaced repetition. Includes AI-powered card generation via OpenRouter and supports four card types: basic, write, image, and fill-in-the-blanks."
          }
          imageUrl="/eolonotas.png"
          githubUrl="https://github.com/redmor1/eolonotas"
          projectUrl="https://github.com/redmor1/eolonotas"
          tags={["React Native", "Expo Go", "TypeScript", "SQLite"]}
        />
      </section>
      <section className="max-w-5xl mx-auto mb-12">
        <h1 className="text-zinc-50 text-7xl font-bold text-center my-12 font-display tracking">
          About me
        </h1>
        <div className="flex flex-col items-center justify-between text-zinc-300">
          <div className="max-w-xl text-lg leading-7 mb-12">
            <p className="mb-4 border-b-zinc-700 border-b-4 pb-4">
              Coming from a background where teamwork, clear communication, and
              performing under pressure were essential, these values naturally
              carried over into software development. I started programming at
              the Informatorio bootcamp, a practical introduction that
              emphasized real-world problem solving. From there, my focus
              expanded into fullstack development — learning to build, connect,
              and test everything from frontend interfaces to backend logic,
              while also exploring UI/UX to understand how it all fits together.
            </p>
            <p className="mb-2">
              Alongside that, staying active in dev communities and learning
              from more experienced developers has shaped much of my growth as a
              developer. I'm now close to finishing an associate's degree in
              programming, which has strengthened my understanding of core
              concepts — from logic and data structures to how software behaves
              under the hood.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}

export default App;
