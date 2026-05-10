import {
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

const Experience = () => {

  return (

    <section
      className="experience"
      id="experience"
    >

      <h2 className="heading">
        Experience & <span>LeetCode</span>
      </h2>

      <div className="experience-container">

        {/* EXPERIENCE */}
        <div className="experience-box">

          <div className="experience-title">

            <FaBriefcase className="experience-icon" />

            <div>

              <h3>Infosys Internship</h3>

              <h4>Full Stack & AI Development</h4>

              <span>2025</span>

            </div>

          </div>

          <p>

            Infosys Internship
Full Stack & AI Development
2025

Worked as a Full Stack & AI Development Intern where I gained hands-on experience in software development, modern web technologies, and real-time project environments. Contributed to frontend and backend application development using modern development practices while improving problem-solving and analytical skills.

Worked on responsive web applications, database integration, debugging, API handling, and application optimization. Gained exposure to AI-based systems, scalable application architecture, and modern software development workflows in an agile environment.

Enhanced technical knowledge in Java, JavaScript, React.js, Node.js, SQL, and GitHub while collaborating on development tasks and project-based activities. Improved teamwork, communication, and project management skills through practical industry experience and real-world development scenarios.

          </p>

        </div>

        {/* LEETCODE */}
        <div className="experience-box">

          <div className="experience-title">

            <FaCode className="experience-icon" />

            <div>

              <h3>LeetCode Profile</h3>

              <h4>Problem Solving & DSA</h4>

              <span>Active Coder</span>

            </div>

          </div>

          <p>

            Solving Data Structures and Algorithms
            problems regularly with focus on
            arrays, strings, recursion,
            dynamic programming, trees,
            and interview preparation.

          </p>

          {/* LEETCODE CARD */}
          <div className="leetcode-profile-card">

            <a
              href="https://leetcode.com/u/JXaioVwc9s/"
              target="_blank"
              rel="noreferrer"
            >

              <img
                src="https://leetcard.jacoblin.cool/JXaioVwc9s?theme=dark&font=Karma"
                alt="leetcode"
              />

            </a>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Experience;