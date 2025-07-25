import React from "react";
import "./App.css";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Project from "./Pages/Project";
import Education from "./Pages/Education";
import Certification from "./Pages/Certification";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="headerContainer">
          <div className="headerText">
            <h1>Sridhar R</h1>
            <h3>Java Full Stack Developer</h3>
            <p>
              Passionate about turning concepts into scalable, user-friendly
              applications.
            </p>
          </div>
          <div className="navBar">
            <p>
              <a href="#about">
                <hr /> About
              </a>
            </p>
            <p>
              <a href="#experience">
                <hr /> Experience
              </a>
            </p>
            <p>
              <a href="#project">
                <hr /> Project
              </a>
            </p>
            <p>
              <a href="#certification">
                <hr /> Certification
              </a>
            </p>
            <p>
              <a href="#education">
                <hr /> Education
              </a>
            </p>
          </div>
          <div className="headerIcons">
            <a href="https://github.com/Sridhar3039">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sridhar3029">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sridharkumar3029@gmail.com"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="sideContainer">
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="certification">
            <Certification />
          </div>
          <div id="education">
            <Education />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
