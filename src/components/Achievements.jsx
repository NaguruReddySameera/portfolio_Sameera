import {
  FaTrophy,
  FaStar,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const Achievements = () => {

  const achievements = [

    "Infosys Internship",
    "LogicNest AI Project",
    "Full Stack Development Projects",
    "Real-Time Maritime Tracking System",

  ];

  const certifications = [

    "ServiceNow Certified Application Developer",
    "ServiceNow System Administration",
    "Infosys Full Stack Development",
    "Artificial Intelligence Fundamentals",
    "Java Programming Certification",

  ];

  return (

    <section
      className="achievements"
      id="achievements"
    >

      <div className="achievements-container">

        {/* ACHIEVEMENTS */}
        <div className="achievement-box">

          <h2>
            Achieve<span>ments</span>
          </h2>

          <div className="achievement-line"></div>

          <ul>

            {achievements.map((item, index) => (

              <li key={index}>

                <FaTrophy className="achievement-icon" />

                {item}

              </li>

            ))}

          </ul>

        </div>

        {/* CERTIFICATIONS */}
        <div className="achievement-box">

          <h2>
            Certifica<span>tions</span>
          </h2>

          <div className="achievement-line"></div>

          <ul>

            {certifications.map((item, index) => (

              <li key={index}>

                <FaCertificate className="achievement-icon" />

                {item}

              </li>

            ))}

          </ul>

        </div>

      </div>

    </section>

  );

};

export default Achievements;