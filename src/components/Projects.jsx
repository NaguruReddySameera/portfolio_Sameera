import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Projects = () => {

  const projects = [

    {
      title: "Maritime Vessel Tracking System",

      image: "/photo 1.jpg",

      description:
        "Real-time vessel tracking platform using live map systems, backend APIs, and database technologies for maritime monitoring.",

      tech: [
        "React",
        "Node.js",
        "MySQL",
      ],
    },

    {
      title: "LogicNest AI Platform",

      image: "/photo 2.png",

      description:
        "AI-powered coding platform with coding challenges, mock interviews, code analysis, and voice interaction features.",

      tech: [
        "React",
        "AI",
        "JavaScript",
      ],
    },

  ];

  return (
    <section className="projects" id="projects">

      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            {/* IMAGE */}
            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            {/* CONTENT */}
            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {/* TECH STACK */}
              <div className="tech-stack">

                {project.tech.map((item, i) => (

                  <span key={i}>
                    {item}
                  </span>

                ))}

              </div>

              {/* BUTTONS */}
              <div className="project-buttons">

                <a href="https://github.com/NaguruReddySameera">
                  <FaGithub />
                </a>

                <a href="#">
                  <FaExternalLinkAlt />
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;