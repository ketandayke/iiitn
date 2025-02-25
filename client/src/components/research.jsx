import React from "react";
// import "./Research.css"; // Import the external CSS file

const Research = () => {
  return (
    <section className="research">
      <h2 className="research-title">Research</h2>
      <p className="research-description">
        Driving discoveries vital to our world, our health, and our <br />
        intellectual life.
      </p>

      <hr className="divider" />

      <div className="research-images">
        <img
          src="../images/r1.jpg"
          alt="Research Area"
          className="research-image"
        />
        <img
          src="../images/r2.jpg"
          alt="Research Lab"
          className="research-image"
        />
        <img src="../images/r3.jpg" alt="Funding" className="research-image" />
      </div>

      <hr className="divider" />

      <div className="research-stats">
        <div className="research-item">
          <strong>14</strong> <br /> Areas for Research
        </div>
        <div className="research-item">
          <strong>35</strong> <br /> Labs
        </div>
        <div className="research-item">
          <strong>₹3,71,27,000+</strong> <br /> Received for Research
        </div>
      </div>

      <hr className="divider" />

      <a href="/research" className="research-button">
        More About Research
      </a>
    </section>
  );
};

export default Research;