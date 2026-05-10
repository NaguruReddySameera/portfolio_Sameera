const Education = () => {

  return (

    <section className="education" id="education">

      <h2 className="heading">
        My <span>Education</span>
      </h2>

      <div className="education-container">

        {/* INTERMEDIATE */}
        <div className="education-card">

          <div className="education-dot"></div>

          <h3>Intermediate Education</h3>

          <h4>MPC Stream</h4>

          <span>2020 - 2022</span>

          <p>

            Built strong analytical and problem-solving
            foundations in Mathematics, Physics,
            and Computer Science.

          </p>

        </div>

        {/* BTECH */}
        <div className="education-card">

          <div className="education-dot"></div>

          <h3>Bachelor of Technology</h3>

          <h4>Computer Science Engineering</h4>

          <span>2022 - 2026</span>

          <p>

            Pursuing B.Tech in Computer Science Engineering
            with strong interest in Full Stack Development,
            Artificial Intelligence, and Real-Time Systems.

          </p>

        </div>

        {/* INTERNSHIP */}
        <div className="education-card">

          <div className="education-dot"></div>

          <h3>Infosys Internship</h3>

          <h4>Full Stack & AI Development</h4>

          <span>2025</span>

          <p>

            Worked on modern web technologies,
            AI-powered systems, frontend development,
            and backend integration projects.

          </p>

        </div>

      </div>

    </section>

  );

};

export default Education;