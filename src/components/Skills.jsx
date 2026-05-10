import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";

const Skills = () => {

  const skills = [

    {
      icon: <FaJava />,
      name: "Java",
      percent: "90%",
    },

    {
      icon: <FaPython />,
      name: "Python",
      percent: "85%",
    },

    {
      icon: <SiJavascript />,
      name: "JavaScript",
      percent: "88%",
    },

    {
      icon: <FaReact />,
      name: "React",
      percent: "80%",
    },

    {
      icon: <FaNodeJs />,
      name: "Node.js",
      percent: "75%",
    },

    {
      icon: <SiMysql />,
      name: "MySQL",
      percent: "82%",
    },

    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
      percent: "78%",
    },

    {
      icon: <FaHtml5 />,
      name: "HTML/CSS",
      percent: "92%",
    },

  ];

  return (
    <section className="skills" id="skills">

      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            {/* PROGRESS BAR */}
            <div className="progress-bar">

              <div
                className="progress-line"
                style={{ width: skill.percent }}
              ></div>

            </div>

            <span className="percentage">
              {skill.percent}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;