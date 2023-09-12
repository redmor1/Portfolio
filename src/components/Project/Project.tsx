import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project() {
  return (
    <>
      <div className="relative mx-auto max-w-6xl px-16 py-8 overflow-hidden mb-24 rounded-lg">
        <div className="mr-auto w-2/3 max-w-md text-left text-neutral-50">
          <div className="flex gap-x-4 mb-12">
            <a href="#">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-4xl text-neutral-50 bg-teal-600 rounded-full p-2"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faLink}
                className="text-4xl text-neutral-50 bg-teal-600 rounded-full p-2"
              />
            </a>
          </div>
          <h1 className="text-6xl font-extrabold tracking-wide text-neutral-50">
            Ecommerce
          </h1>
          <p className="mt-4 text-neutral-400 tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            aliquam. Animi esse, harum veritatis quia blanditiis id atque neque
            iste voluptates, rerum soluta consequuntur in nisi aut modi dolorem
            sunt.
          </p>
          <div className="mt-12 flex text-xl font-extrabold tracking-wide gap-x-4">
            <p className="text-neutral-50 bg-teal-600 px-2   rounded-md  tracking-wider">
              REACT
            </p>{" "}
            <p className="text-neutral-50 bg-teal-600 px-2  rounded-md  tracking-wider">
              JAVASCRIPT
            </p>{" "}
            <p className="text-neutral-50 bg-teal-600 px-2  rounded-md tracking-wider">
              VITE
            </p>
          </div>
        </div>
        <img
          className="absolute right-0 top-12 w-[28rem] rounded-xl"
          src="https://portfolio-website-q3qoosn22-bytegrad.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcorpcomment.3895cd42.png&w=750&q=95"
        ></img>
      </div>
    </>
  );
}

export default Project;
