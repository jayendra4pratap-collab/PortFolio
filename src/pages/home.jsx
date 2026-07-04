/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const name = [..."Jayendra Pratap Singh"];
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="home-section  flex-col justify-center align-middle animated-bg min-h-screen"
    >
      <div>
        <div className="w-screen h-52 flex justify-center ">
          <div className="inline-block px-5 h-11  mt-55 py-2 border border-gray-700 rounded-2xl bg-gray-900/80">
            <span className="text-gray-200 mt-10 font-medium tracking-widest uppercase text-sm">
              ✨ Creative Developer
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-8xl h-30 mt-18 font-bold flex justify-center ">
            {name.map((letter, index) => (
              <motion.span
                key={index}
                className="text-gradient-neon"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,

                  delay: index * 0.1,

                  ease: "easeOut",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
        </div>
        <div className="flex justify-center text-5xl mt-2">
          <h2>
            Building the{" "}
            <span className="text-[#9B4CDC]">digital future.</span>{" "}
          </h2>
        </div>
        <div className="flex justify-center text-3xl mt-8 font-outfit">
          <h2>Crafting immersive, high-performance web experiences with</h2>
        </div>
        <div className="flex justify-center text-3xl mt-1 font-outfit ">
          <h2>React, Tailwind, and a touch of neon magic.</h2>
        </div>

        <div className="flex gap-8 justify-center mt-8">
          <button
            className="btn bg-[#00d9FF] text-black flex-row"
            onClick={() => navigate("/projects")}
          >
            View my Work
          </button>
          <button
            className="btn bg-[#010101]"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </button>
        </div>
      </div>
      {/*} <div className="project-home mt-25 ml-5  ">
        <h1 className="text-6xl font-bold">
          Featured <span className="text-gradient-neon blurr">Projects</span>
        </h1>
        <h2 className="text-2xl mt-5">
          A selection of my best work, blending high-end design with robust
        </h2>
        <h2 className="text-2xl">engineering.</h2>
        <div className="project-link  flex">
          <p className="flex ml-auto mr-15 mb-5 justify-center gap-3 text-1xl">
            View all projects <LuExternalLink />
          </p>
        </div>
      </div>*/}
      <div className="competencies mt-30">
        <div>
          <div className="flex justify-center">
            <h2 className="text-5xl  font-bold">
              Core <span className="text-gradient-neon ">Competencies</span>
            </h2>
          </div>
          <h3 className="flex justify-center text-2xl mt-5">
            A multi-disciplinary approach to software engineering, bridging the
            gap between
          </h3>
          <h3 className="flex justify-center text-2xl">
            design and robust functionality.
          </h3>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <div className="h-100 w-200  bg-[#010101] rounded-3xl flex items-center justify-center">
          <div className=" flex justify-center items-center flex-col ">
            <div className="mb-10 mt-10 flex flex-col text-center gap-2">
              <h2 className="text-5xl font-bold">Ready to Build</h2>
              <h3 className="text-5xl font-bold">
                something{" "}
                <span className="text-gradient-neon">extraordinary ?</span>
              </h3>
            </div>
            <div className=" font-light mb-10 flex flex-col text-center ">
              <p>
                Whether you have a specific project in mind or just want to
                explore possibilities, let's
              </p>
              <p>collaborate to bring your digital vision to life.</p>
            </div>

            <button
              className="btn  bg-[#00d9FF] text-black  "
              onClick={() => navigate("/contact")}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
      <div className="h-10 w-screen"></div>
    </section>
  );
}

export default Home;
