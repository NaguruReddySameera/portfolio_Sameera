const About = () => {
  return (
    <section className="about" id="about">

      {/* IMAGE */}
      <div className="about-img">

        <div className="about-glow"></div>

        <div className="about-image-box">

          <img
              src="/about-new.jpg"
            alt="about"
          />

        </div>

      </div>

      {/* CONTENT */}
      <div className="about-content">

        <h2>
          About <span>Me</span>
        </h2>

        <h3>
          Full Stack Developer!
        </h3>

        <p>
          I am Reddy Sameera, a passionate Full Stack Developer
          and Computer Science undergraduate with strong interest
          in modern web technologies, AI-powered applications,
          and real-time systems.

          I specialize in building responsive, futuristic,
          and user-friendly applications using React,
          JavaScript, Java, Node.js, and database technologies.

          Currently, I am working as an Infosys Intern,
          where I am gaining practical experience in
          software development, scalable systems,
          and modern application architecture.

          I enjoy solving coding problems, exploring
          innovative technologies, and creating premium
          digital experiences that combine performance,
          creativity, and modern UI/UX design.
        </p>

        <a href="#" className="btn">
          Read More
        </a>

      </div>

    </section>
  );
};

export default About;