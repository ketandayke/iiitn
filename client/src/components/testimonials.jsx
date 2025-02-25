import React from "react";
 import "./testimonial.css"; // Import CSS file for styling

const Testimonial = () => {
  return (
    <div className="testimonial-container">
  {/* Background Image */}
  <div className="testimonial-background"></div>

  {/* Content Box */}
  <div className="testimonial-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
    <img
      src="../images/rev1.jpg"
      alt="Person"
      className="testimonial-profile"
      style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%", marginBottom: "15px" }}
    />
    <p className="testimonial-quote">
      "The campus environment and supportive faculty made my journey memorable."
    </p>
    <h3 className="testimonial-name">Ishita Patel</h3>
    <p className="testimonial-class">2022</p>
    <a href="#" className="testimonial-more">More &gt;</a>
  </div>
</div>

  );
};

export default Testimonial;