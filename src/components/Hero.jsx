import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {

  return (

    <section className="home" id="home">

      {/* LEFT SIDE */}
      <div className="home-content">

        <h3>Hello, It's Me</h3>

        <h1>
          Reddy <br />
          Sameera
        </h1>

        <h3>

          And I'm a{""}

          <span>

            <Typewriter
              words={[
                "Full Stack Developer",
                
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1500}
            />

          </span>

        </h3>

        <p>

          Computer Science undergraduate skilled in Java,
          full-stack development, AI systems,
          and database technologies.

          Infosys Intern passionate about futuristic
          web applications and real-time tracking systems.

        </p>

        {/* SOCIAL ICONS */}
        <div className="social-media">

          <a href="https://github.com/NaguruReddySameera">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/sameerareddy123/">
            <FaLinkedin />
          </a>

          

        </div>

        {/* RESUME BUTTON */}
        <a
          href="/resume.png"
          download
          className="btn"
        >
          Download Resume
        </a>

      </div>

      {/* RIGHT SIDE */}
      <div className="home-img">

        <div className="glow"></div>

        <div className="image-box">

          <img
           src="/profile-new.png"
            alt="profile"
          />

        </div>

      </div>

    </section>

  );

};

export default Hero;