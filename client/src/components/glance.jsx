import React from "react";
// import "./Glance.css";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Glance = () => {
  return (
    <section className="glance mt-8">
      {/* Background Image */}
      <div className="glance-background"></div>

      {/* Content Box */}
      <div className="glance-content">
        <h2>EVENTS@IIITN</h2>
        <p>
          Experience the vibrant culture of IIITN with annual tech, cultural,
          and entrepreneurial events that foster innovation, creativity, and
          leadership.
        </p>

        {/* Event List */}
        <ul className="event-list">
          <li>ABHIVYAKTI &gt;</li>
          <li>TANTRAFIESTA &gt;</li>
          <li>E-SUMMIT &gt;</li>
          <li>KSHITIJ &gt;</li>
        </ul>

        {/* Social Media Links */}
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Glance;