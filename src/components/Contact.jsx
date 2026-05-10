import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_918pjqq",
        "template_bwktx26",
        form.current,
        "BaITjFdrVlmTVaV9M"
      )

      .then(() => {

        alert(
          "Message Sent Successfully 🚀"
        );

        form.current.reset();

      })

      .catch((error) => {

        console.log(error);

        alert(error.text);

      });

  };

  return (

    <section
      className="contact"
      id="contact"
    >

      <h2 className="heading">

        Contact <span>Me</span>

      </h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h3>
            Let's Work Together
          </h3>

          <p>

            I am passionate about building
            futuristic web applications,
            AI systems, and full-stack projects.

            Feel free to contact me for
            collaborations, internships,
            or development opportunities.

          </p>

          <div className="contact-details">

            <p>
              📧 sameerareddy583@gmail.com
            </p>

            <p>
              📱 +91 630144497
            </p>

          </div>

          {/* SOCIAL ICONS */}
          <div className="contact-icons">

            <a href="https://github.com/NaguruReddySameera">

              <FaGithub />

            </a>

            <a href="https://www.linkedin.com/in/sameerareddy123/">

              <FaLinkedin />

            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">

            Send Message

          </button>

        </form>

      </div>

    </section>

  );

};

export default Contact;