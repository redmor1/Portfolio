import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project() {
  return (
    <>
      <div className="relative mx-auto max-w-5xl rounded-lg bg-neutral-900 px-16 py-8 overflow-hidden mb-24">
        <div className=" mr-auto w-2/3 max-w-md text-left text-neutral-50">
          <div className="flex justify-between w-3/12 mb-8">
            <a href="#">
              <FontAwesomeIcon icon={faGithub} className="text-4xl" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLink} className="text-4xl" />
            </a>
          </div>
          <h1 className="text-5xl font-bold tracking-wide">E-COMMERCE</h1>
          <p className="mt-4 text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            aliquam. Animi esse, harum veritatis quia blanditiis id atque neque
            iste voluptates, rerum soluta consequuntur in nisi aut modi dolorem
            sunt.
          </p>
          <div className="mt-8 flex max-w-[20rem]  justify-between text-xl font-black tracking-widest">
            <p>REACT</p> <p>JAVASCRIPT</p> <p>VITE</p>
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
