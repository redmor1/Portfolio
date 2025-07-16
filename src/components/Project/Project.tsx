import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectProps {
  title?: string;
  logo?: React.ReactNode;
  description: string;
  imageUrl: string;
  githubUrl: string;
  projectUrl: string;
  tags: string[];
}

function Project({
  title,
  logo,
  description,
  imageUrl,
  githubUrl,
  projectUrl,
  tags = [],
}: ProjectProps) {
  return (
    <>
      <div className="relative mx-auto bg-zinc-900 max-w-6xl xs:px-16 px-8 lg:py-8 pt-8 overflow-hidden mb-24 rounded-lg h-[40rem] lg:h-auto">
        <div className="relative z-10 mr-auto xl:max-w-md lg:max-w-sm max-w-sm mb-12 lg:mb-0 text-left text-neutral-50">
          <div className="flex gap-x-4 items-center">
            <a
              href={githubUrl}
              className="text-zinc-100 hover:bg-zinc-100 hover:border-zinc-100 hover:text-teal-950 bg-teal-950 border-2 border-teal-950 py-0.5 px-1.5 rounded-xl font-bold underline-offset-2 font-display tracking-wider"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl"
              ></FontAwesomeIcon>
            </a>
            <a
              href={projectUrl}
              className="text-zinc-100 hover:bg-zinc-100 hover:border-zinc-100 hover:text-teal-950 bg-teal-950 border-2 border-teal-950 py-0.5 px-0.5 rounded-xl  font-bold underline-offset-2 font-display tracking-wider"
            >
              <FontAwesomeIcon
                icon={faLink}
                className="text-4xl"
              ></FontAwesomeIcon>
            </a>
          </div>
          {logo && <div className="mb-4 mx-auto">{logo}</div>}
          {title && (
            <h1 className="text-5xl xs:text-6xl mb-4 mt-10 font-extrabold tracking-wide text-neutral-50 mx-auto">
              {title}
            </h1>
          )}
          <p className="mt-4 text-zinc-400 tracking-tight z-10">
            {description}
          </p>
          <div className="flex gap-x-4 flex-wrap mt-10 items-center">
            {tags &&
              tags.map((tag) => (
                <h3 className="text-teal-700 text-2xl font-display uppercase tracking-wide">
                  {tag}
                </h3>
              ))}
          </div>
        </div>
        <a href={projectUrl}>
          <img
            className="z-0 absolute right-0 sm:top-80 md:top-80 lg:top-12 w-[47.5vw] lg:w-[28rem] rounded-xl shadow-[-8.0px_-1.0px_8.0px_rgba(0,0,0,0.38)]"
            src={imageUrl}
            alt={title}
          ></img>
        </a>
      </div>
    </>
  );
}

export default Project;
