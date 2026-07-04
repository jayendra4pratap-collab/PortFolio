

const Skills = () => {
   const skills = [
     { name: "HTML", percentage: 95 },
     { name: "CSS", percentage: 90 },
     { name: "JavaScript", percentage: 80 },
     { name: "React", percentage: 75 },
     { name: "JAVA", percentage: 85 },
     { name: "C++", percentage: 95 },
     { name: "C", percentage: 90 },
     { name: "Flutter", percentage: 80 },
   ];
  return (
    <div className="h-auto w-screen flex flex-col items-center justify-center bg-[#0a192f]">
      <div className="working-area">
        <div className="heading mt-30 text-center">
          <h1 className="text-6xl">
            Technical <span className="text-gradient-neon">Arnesal</span>
          </h1>
        </div>
        <div className="text-center mt-10 text-2xl font-outfit text-[#a1a1a1]">
          <p>
            Languages, frameworks, and tools I use to build robust applications.
            I'm constantly learning and expanding this toolkit.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-20">
          <div className="skills-box">
            {level(skills[0].name,skills[0].percentage)}
          </div>
          <div className="skills-box">
            {level(skills[1].name,skills[1].percentage)}
          </div>
          <div className="skills-box">
            {level(skills[2].name,skills[2].percentage)}
          </div>
          <div className="skills-box">
            {level(skills[3].name,skills[3].percentage)}
          </div>
          <div className="skills-box">
            {level(skills[4].name,skills[4].percentage)}
          </div>
          <div className="skills-box">
            {level(skills[5].name,skills[5].percentage)}
          </div>
          <div className="skills-box">
            {level(skills[6].name,skills[6].percentage)}    
          </div>
            <div className="skills-box">
            {level(skills[7].name,skills[7].percentage)}    
            </div>
        </div>
      </div>
    </div>
  );
}

const level= (name,percentage) => {
  return (
    <div>
      <div className="flex justify-between px-10 mt-6">
        <p className="text-2xl font-bold font-outfit">{name}</p>

        <p className="text-2xl font-bold">{percentage}%</p>
      </div>

      <div className="w-[80%] h-3 bg-gray-700 rounded-full mx-10 mt-3 overflow-hidden">
        <div
          className="h-full bg-[#00d9FF] rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}




export default Skills;
