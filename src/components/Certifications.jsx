const Certifications = () => {

  return (

    <section
      className="certifications"
      id="certifications"
    >

      <h2 className="heading">

        My <span>Certifications</span>

      </h2>

      <div className="certification-list">

        <img
          src="/certificates/cad.png"
          alt="cad"
          className="certificate-image"
          onClick={() =>
            window.open(
              "/certificates/cad.png",
              "_blank"
            )
          }
        />

        <img
          src="/certificates/csa.png"
          alt="csa"
          className="certificate-image"
          onClick={() =>
            window.open(
              "/certificates/csa.png",
              "_blank"
            )
          }
        />

      </div>

    </section>

  );

};

export default Certifications;