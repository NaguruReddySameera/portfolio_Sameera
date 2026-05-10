import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-content">

        <h2>
          Sameera <span>Reddy</span>
        </h2>

        <p>
          Full Stack Developer • AI Enthusiast • Infosys Intern
        </p>

        {/* SOCIAL ICONS */}
        <div className="footer-icons">

          <a href="https://github.com/NaguruReddySameera">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/sameerareddy123/">
            <FaLinkedin />
          </a>

          
        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Sameera Reddy. All Rights Reserved.
        </p>

      </div>

    </footer>

  );

};

export default Footer;