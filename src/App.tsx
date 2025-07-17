import "./App.css";
import Project from "./components/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe";
//  const descriptionFiller =
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum dolor, quod atque, sed illo placeat possimus ipsa sint dignissimos sapiente provident, nostrum veritatis vel laudantium consectetur quaerat distinctio aliquam?";
function App() {
  return (
    <main className="bg-[url('/noise.svg')] font-normal px-4 xs:px-8">
      <p className="text-white font-bold">Website in progress</p>
      <Navbar />
      <section className="mx-auto min-h-[75vh] max-w-6xl mb-24 text-center border-b-4 border-teal-950 py-8">
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
        <h1 className="font-display text-zinc-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-24">
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
          colors={{
            tagColor: "#FFA2B2",
            buttonColor: "#FFA2B2",
            buttonHoverColor: "#FFFF",
            buttonHoverTextColor: "#FFA2B2",
          }}
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
          colors={{
            tagColor: "#8E5B9A",
            buttonColor: "#8E5B9A",
            buttonHoverColor: "#FFFF",
            buttonHoverTextColor: "#8E5B9A",
          }}
        />
      </section>
      <AboutMe />
      <Contact />
    </main>
  );
}

export default App;
