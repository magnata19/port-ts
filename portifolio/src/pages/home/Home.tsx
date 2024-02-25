
import { Fade } from "react-awesome-reveal";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-gradient-to-b from-zinc-800 to-[#000000] h-screen flex flex-column justify-center items-center">
      <div className="text-white text-5xl text-center tracking-widest">
        <Fade direction="down">
          <h1 className="text-2xl lg:text-5xl">Fullstack Developer</h1>
        </Fade>
        <Fade>
          <h3 className="text-slate-500 text-xl pt-2">Davidson Pacifico</h3>
        </Fade>
          <Fade direction="up">
        <div className="pt-6 flex justify-center">
            <ul className="flex justify-beetween">
              <Link
                className="text-4xl px-2 hover:text-[#3373a7]"
                target="_blank"
                to="https://www.linkedin.com/in/davidson-pacifico/"
              >
                <li>
                  <FaLinkedin />
                </li>
              </Link>
              <Link
                className="text-4xl px-2 hover:text-[#363636] "
                target="_blank"
                to="https://github.com/magnata19"
              >
                <li>
                  <FaGithub />
                </li>
              </Link>
              <Link
                className="text-4xl px-2 hover:text-[#8b0000]"
                target="_blank"
                to="https://www.instagram.com/_dev.dave_/"
              >
                <li>
                  <FaInstagram />
                </li>
              </Link>
            </ul>
        </div>
          </Fade>
      </div>
    </div>
  );
};

export default Home;
