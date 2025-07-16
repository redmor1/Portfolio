import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export interface ProjectColors {
  tagColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonHoverTextColor?: string;
}

export interface ProjectProps {
  title?: string;
  logo?: React.ReactNode;
  description: string;
  imageUrl: string;
  githubUrl: string;
  projectUrl: string;
  tags: string[];
  colors?: ProjectColors;
}

function Project({
  title,
  logo,
  description,
  imageUrl,
  githubUrl,
  projectUrl,
  tags = [],
  colors,
}: ProjectProps) {
  // Default color scheme - portfolio colors
  const defaultColors = {
    tagColor: "rgb(15 118 110)",
    buttonColor: "rgb(19 78 74)",
    buttonHoverColor: "rgb(244 244 245)",
    buttonHoverTextColor: "rgb(19 78 74)",
  };

  // Fallback to default colors if custom colors are not provided
  const resolvedColors = {
    tagColor: colors?.tagColor || defaultColors.tagColor,
    buttonColor: colors?.buttonColor || defaultColors.buttonColor,
    buttonHoverColor:
      colors?.buttonHoverColor || defaultColors.buttonHoverColor,
    buttonHoverTextColor:
      colors?.buttonHoverTextColor || defaultColors.buttonHoverTextColor,
  };
  return (
    <>
      <div
        className="mx-auto bg-zinc-900 max-w-6xl mb-24 rounded-lg overflow-hidden
                      flex flex-col md:relative md:min-h-[450px] lg:min-h-[500px]"
      >
        {/* Text Content */}
        <div
          className="xs:px-16 px-8 py-8 text-left text-neutral-50 
                        md:w-1/2 md:max-w-lg lg:max-w-xl md:relative md:z-10"
        >
          <div className="flex gap-x-4 items-center">
            <a
              href={githubUrl}
              style={
                {
                  "--btn-bg": resolvedColors.buttonColor,
                  "--btn-hover-bg": resolvedColors.buttonHoverColor,
                  "--btn-hover-text": resolvedColors.buttonHoverTextColor,
                } as React.CSSProperties
              }
              className="text-zinc-100 hover:bg-[var(--btn-hover-bg)] hover:border-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-text)] bg-[var(--btn-bg)] border-2 border-[var(--btn-bg)] py-0.5 px-1.5 rounded-xl font-bold underline-offset-2 font-display tracking-wider transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl"
              ></FontAwesomeIcon>
            </a>
            <a
              href={projectUrl}
              style={
                {
                  "--btn-bg": resolvedColors.buttonColor,
                  "--btn-hover-bg": resolvedColors.buttonHoverColor,
                  "--btn-hover-text": resolvedColors.buttonHoverTextColor,
                } as React.CSSProperties
              }
              className="text-zinc-100 hover:bg-[var(--btn-hover-bg)] hover:border-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-text)] bg-[var(--btn-bg)] border-2 border-[var(--btn-bg)] py-0.5 px-0.5 rounded-xl font-bold underline-offset-2 font-display tracking-wider transition-colors duration-200"
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
          <p className="mt-4 text-zinc-400 tracking-tight">{description}</p>
          <div className="flex gap-x-4 flex-wrap mt-10 items-center">
            {tags &&
              tags.map((tag) => (
                <h3
                  key={tag}
                  style={{ color: resolvedColors.tagColor }}
                  className="text-2xl font-display uppercase tracking-wide"
                >
                  {tag}
                </h3>
              ))}
          </div>
        </div>

        {/* Image - Mobile: full width below text, Desktop: positioned to right */}
        <div
          className="w-full px-8 xs:px-16 pb-8 
                        md:p-0 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 
                        md:w-[52%] md:h-auto"
        >
          <a href={projectUrl} className="block">
            <img
              className="w-full h-auto rounded-xl shadow-[-8.0px_-1.0px_8.0px_rgba(0,0,0,0.38)]
                         md:max-h-[400px] lg:max-h-[450px] xl:max-h-[500px]
                         object-contain md:ml-auto"
              src={imageUrl}
              alt={title}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
