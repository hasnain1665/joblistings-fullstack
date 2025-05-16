import React from "react";
import "./Navbar.css";

export default function Navbar({ onPostJobClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Actuary List</div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <button
              onClick={onPostJobClick}
              className="post-job-button"
              type="button"
            >
              Post a Job
            </button>
          </li>
        </ul>
        <button className="alert-button">Get Free Job Alerts</button>
      </div>
    </nav>
  );
}
