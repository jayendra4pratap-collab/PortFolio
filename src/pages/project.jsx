import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Project = () => {
  return (
    <div className="h-auto w-screen flex flex-col items-center justify-center bg-[#0a192f]">
      <div className="working-area">
        <div className="heading mt-30 text-center">
          <h1 className="text-6xl">
            Selected <span className="text-gradient-neon">Works</span>
          </h1>
        </div>
        <div className="text-center mt-10 text-2xl font-outfit text-[#a1a1a1]">
          <p>
            A showcase of my recent coding endeavors, ranging from web
            interfaces to cross-platform mobile applications.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-10 ">
          <div className="project-container ">
            <div className="heading">
              <div className="flex ">
                <h1 className="text-2xl ml-4  mt-7 font-semibold text-[#00d9FF]">
                  Netflix Website Clone
                </h1>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 mt-6  ml-16  rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00D9FF] hover:text-black"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 mt-6 ml-auto mr-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00D9FF] hover:text-black"
                >
                  <FiExternalLink />
                </a>
              </div>
              <hr className=" my-2 mx-5 border-gray-600" />
              <p className="mt-4 ml-3 mr-3 text-center font-outfit text-[#a1a1a1]">
                A fully responsive front-end clone of the Netflix web interface.
                Built with modern UI patterns, seamless media carousels, and
                highly optimized components.
              </p>
              <div className="flex mt-4 ml-4 gap-2">
                <h3 className="topic-tag ">HTML</h3>
                <h3 className="topic-tag ">CSS</h3>
              </div>
            </div>
          </div>
          <div className="project-container ">
            <div className="heading">
              <div className="flex ">
                <h1 className="text-2xl ml-4  mt-7 font-semibold text-[#00d9FF]">
                  Currency Converter
                </h1>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 mt-6  ml-20  rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00D9FF] hover:text-black"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 mt-6 ml-auto mr-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00D9FF] hover:text-black"
                >
                  <FiExternalLink />
                </a>
              </div>
              <hr className=" my-2 mx-5 border-gray-600" />
              <p className="mt-4 ml-3 mr-3 text-center font-outfit text-[#a1a1a1]">
                A real-time currency conversion tool utilizing external API data
                to fetch and calculate exchange rates instantly with a clean
                user interface.
              </p>
              <div className="flex mt-4 ml-4 gap-2">
                <h3 className="topic-tag ">HTML</h3>
                <h3 className="topic-tag ">CSS</h3>
                <h3 className="topic-tag ">Javascript</h3>
              </div>
            </div>
          </div>
          <div className="project-container ">
            <div className="heading">
              <div className="flex ">
                <h1 className="text-2xl ml-4  mt-7 font-semibold text-[#00d9FF]">
                  Amazon Page Clone
                </h1>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 mt-6  ml-20  rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00D9FF] hover:text-black"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 mt-6 ml-auto mr-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00D9FF] hover:text-black"
                >
                  <FiExternalLink />
                </a>
              </div>
              <hr className=" my-2 mx-5 border-gray-600" />
              <p className="mt-4 ml-3 mr-3 text-center font-outfit text-[#a1a1a1]">
                A pixel-perfect recreation of the Amazon product landing page.
                Focused on mastering complex layout structures and CSS
                Grid/Flexbox mechanics.
              </p>
              <div className="flex mt-4 ml-4 gap-2">
                <h3 className="topic-tag ">HTML</h3>
                <h3 className="topic-tag ">CSS</h3>
              </div>
            </div>
          </div>
          <div className="project-container ">
            <div className="heading">
              <div className="flex ">
                <h1 className="text-2xl ml-4  mt-7 font-semibold text-[#00d9FF]">
                  BMI Index Calculator
                </h1>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 mt-6  ml-18  rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00D9FF] hover:text-black"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 mt-6 ml-auto mr-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#00D9FF] hover:text-black"
                >
                  <FiExternalLink />
                </a>
              </div>
              <hr className=" my-2 mx-5 border-gray-600" />
              <p className="mt-4 ml-3 mr-3 text-center font-outfit text-[#a1a1a1]">
                A cross-platform mobile application that calculates Body Mass
                Index based on user input, offering personalized health insights
                and interactive charts.
              </p>
              <div className="flex mt-4 ml-4 gap-2">
                <h3 className="topic-tag ">Flutter</h3>
                <h3 className="topic-tag ">Dart</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
