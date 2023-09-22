import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectReverseTemp() {
  return (
    <>
      <div className="relative mx-auto bg-zinc-900 max-w-6xl px-16 py-8 overflow-hidden mb-24 rounded-lg">
        <div className="ml-auto max-w-md text-left text-neutral-50">
          <div className="flex items-center"></div>
          <div className="flex gap-x-4 mb-10 items-center">
            <a
              href="#"
              className="text-zinc-100 hover:bg-zinc-100 hover:border-zinc-100 hover:text-teal-950 bg-teal-950 border-2 border-teal-950 py-0.5 px-1.5 rounded-xl font-bold underline-offset-2 font-display tracking-wider"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl"
              ></FontAwesomeIcon>
            </a>
            <a
              href="#"
              className="text-zinc-100 hover:bg-zinc-100 hover:border-zinc-100 hover:text-teal-950 bg-teal-950 border-2 border-teal-950 py-0.5 px-0.5 rounded-xl  font-bold underline-offset-2 font-display tracking-wider"
            >
              <FontAwesomeIcon
                icon={faLink}
                className="text-4xl"
              ></FontAwesomeIcon>
            </a>
          </div>
          <h1 className="text-6xl mb-4 font-extrabold tracking-wide text-neutral-50">
            Ecommerce
          </h1>
          <p className="mt-4 text-zinc-400 tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            aliquam. Animi esse, harum veritatis quia blanditiis id atque neque
            iste voluptates, rerum soluta consequuntur in nisi aut modi dolorem
            sunt.
          </p>
          <div className="flex gap-x-4 mt-10 items-center">
            <h3 className="text-teal-700 text-xl font-display uppercase tracking-wide">
              React
            </h3>
            <h3 className="text-teal-700 text-xl font-display uppercase tracking-wide">
              Javascript
            </h3>
            <h3 className="text-teal-700 text-xl font-display uppercase tracking-wide">
              Vite
            </h3>
          </div>
        </div>
        <a href="#">
          <img
            className="absolute left-0 top-12 w-[28rem] rounded-xl shadow-[8.0px_-1.0px_8.0px_rgba(0,0,0,0.38)]"
            src="https://portfolio-website-q3qoosn22-bytegrad.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcorpcomment.3895cd42.png&w=750&q=95"
          ></img>
        </a>
      </div>
    </>
  );
}

export default ProjectReverseTemp;
