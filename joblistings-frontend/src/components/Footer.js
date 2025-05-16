import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="footer-logo">Actuary List</div>
          <p>
            Connecting talented professionals with top companies worldwide. Our
            platform makes job hunting and recruitment seamless and efficient.
          </p>
          <div className="social-links">
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Browse Jobs</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> 123 Job Street, Tech City
          </p>
          <p>
            <FaPhone /> +1 (555) 123-4567
          </p>
          <p>
            <FaEnvelope /> info@jobfinder.com
          </p>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates on new jobs and career tips.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Actuary List. All rights reserved. |{" "}
          <a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
