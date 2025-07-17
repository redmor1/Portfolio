import SkillCard from "./SkillCard";

function AboutMe() {
  return (
    <section className="max-w-5xl mx-auto mb-12">
      <h1 className="text-zinc-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center my-12 font-display tracking">
        About me
      </h1>
      <div className="flex flex-col mx-auto max-w-2xl items-center justify-between text-zinc-300">
        <div className="text-lg leading-relaxed tracking-normal mb-12 px-12 py-8 bg-zinc-900 rounded-lg">
          <p className="mb-4">
            Coming from a background where teamwork, clear communication, and
            performing under pressure were essential, these values naturally
            carried over into software development. I started programming at the{" "}
            <span className="text-teal-300">Informatorio bootcamp</span>, a
            practical introduction that emphasized real-world problem solving.
          </p>

          <p className="mb-4">
            From there, my focus expanded into{" "}
            <span className="text-teal-300">fullstack development</span>—
            learning to build, connect, and test everything from frontend
            interfaces to backend logic, while also exploring UI/UX to
            understand how it all fits together.
          </p>

          <p className="">
            Alongside that, staying active in dev communities and learning from
            more experienced developers has shaped much of my growth as a
            developer. I'm now close to finishing an{" "}
            <span className="text-teal-300">
              associate's degree in programming
            </span>
            , which has strengthened my understanding of core concepts — from
            logic and data structures to how software behaves under the hood.
          </p>
        </div>
        <div className="items-start flex justify-between w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full items-stretch">
            <SkillCard
              title="Frontend"
              skills={[
                "React",
                "Vite",
                "Tailwind",
                "TypeScript",
                "JavaScript",
                "Bootstrap",
              ]}
            />
            <SkillCard
              title="Backend"
              skills={[
                "Node.js",
                "Express",
                "ASP.NET Core",
                "C#",
                "Java",
                "Spring Boot",
                "MySQL",
              ]}
            />
            <SkillCard
              title="Mobile"
              skills={["React Native", "Expo Go", "SQLite"]}
            />
            <SkillCard
              title="UI & Tools"
              skills={["Figma", "Photoshop", "Krita"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
