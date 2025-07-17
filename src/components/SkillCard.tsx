interface SkillCardProps {
  title: string;
  skills: string[];
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-zinc-200 font-bold text-4xl font-display mb-2">
        {title}
      </h1>
      <div className="max-w-[10rem] xs:max-w-xs w-full flex flex-col flex-1">
        <span className="block h-1 w-full bg-teal-200 mb-3"></span>
        <div className="flex-1 bg-zinc-900 px-8 py-6 rounded-lg flex flex-col items-start gap-1">
          {skills.map((skill) => (
            <p
              key={skill}
              className="uppercase font-display text-xl text-zinc-400 whitespace-nowrap"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
