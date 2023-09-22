import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="flex justify-between max-w-6xl mx-auto mb-36 pt-16">
      <div>
        <a
          href="#"
          className="font-display hover:bg-teal-600   text-zinc-100 text-2xl border-teal-600 border-4 rounded-md px-2 py-1 block transition-colors ease-linear duration-200"
        >
          VIEW RESUME
        </a>
      </div>
      <div className="flex justify-between w-72 max-w-xl items-center">
        <a
          href="https://github.com/redmor1"
          className="hover:bg-teal-600 text-zinc-100 p-1 rounded-xl transition-colors ease-in-out duration-200"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-3xl"
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/matias-zarate-developer/"
          className="hover:bg-teal-600 text-zinc-100 py-1 px-1.5 rounded-xl transition-colors ease-in-out duration-200"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl"
          ></FontAwesomeIcon>
        </a>

        <a
          href="#"
          className="text-zinc-100 font-bold text-2xl font-display rounded-md
            relative
            before:content-['']
            before:absolute
            before:-bottom-0.5
            before:left-0
            before:w-0
            before:h-[0.1875rem]
            before:duration-200
            before:opacity-0
            before:transition-all
            before:bg-teal-500
            hover:before:w-full
            hover:before:opacity-100
"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-zinc-100 font-bold text-2xl font-display rounded-md
            relative
            before:content-['']
            before:absolute
            before:-bottom-0.5
            before:left-0
            before:w-0
            before:h-[0.1875rem]
            before:duration-200
            before:opacity-0
            before:transition-all
            before:bg-teal-500
            hover:before:w-full
            hover:before:opacity-100"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
