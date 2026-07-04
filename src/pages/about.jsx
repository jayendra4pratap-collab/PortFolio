
import "@fontsource/outfit";
const About = () => {
  return (
    <div>
      <div className="about h-screen w-screen  bg-[#08081d] flex justify-center items-center">
        <div className="about-box h-96 w-96 rounded-2xl">
          <div className="heading h-20 flex justify-center items-center">
            <h2 className="text-5xl font-extrabold">
              Developer <span className="text-[#00d9FF]">Story</span>
            </h2>
          </div>

          <div className="flex">
            <div className="about-img-box  flex justify-center items-center">
              <img
                className="about-image border-1 "
                src="./lap-img.jpg"
                alt="Developer Story"
              />
            </div>
            <div className="about-content mt-6 text-[#A1A1AA] ml-10">
              <p className="font-outfit">
                <span className="font-bold text-white">
                  Hello! I'm Jayendra Pratap Singh.
                </span>{" "}
                I am deeply passionate about translating complex problems into
                elegant, functional, and visually compelling web applications.
              </p>
              <p className="mt-3">
                My journey in coding began with an intense curiosity about how
                digital products operate under the hood. What started as simple
                HTML pages quickly evolved into full-stack development, mobile
                apps with Flutter, and robust software solutions using C++ and
                Java.
              </p>
              <div className="philosopy-box h-56 w-96 mt-5 rounded-4xl bg-[#1f1f2e] border-1">
                <div className="philosophy-heading flex justify-center ">
                  <h1 className="text-2xl text-white mt-4 font-extrabold">The Philosophy</h1>
                </div>
                <div className="mt-2 p-3">
                  <p>
                    I believe in writing clean, scalable code that not only
                    solves today's challenges but is also prepared for
                    tomorrow's scale. Great software lives at the intersection
                    of robust architecture and delightful user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="heading flex justify-center">
            <h2 className="text-5xl font-extrabold">
              Developer <span className="text-[#00d9FF]">Story</span>
            </h2>
          </div>
          <div className="flex">
            <div className="about-image flex ml-0 items-center">
              <img src="./coding-lap.jpg" alt="Developer Story" />
            </div>
            <div className="about-content text-black ">
              <p className="text-lg text-center">
                Hello! I'm Jayendra Pratap Singh. I am deeply passionate about
                translating complex problems into elegant, functional, and
                visually compelling web applications.
              </p>
              <p>
                My journey in coding began with an intense curiosity about how
                digital products operate under the hood. What started as simple
                HTML pages quickly evolved into full-stack development, mobile
                apps with Flutter, and robust software solutions using C++ and
                Java.
              </p>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default About
