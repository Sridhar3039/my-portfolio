import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Project from "./Pages/Project";
import Education from "./Pages/Education";
import Certification from "./Pages/Certification";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const certificationRef = useRef(null);
  const educationRef = useRef(null);
  const sideContainerRef = useRef(null);

  const handleScroll = () => {
    const sectionPositions = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "project", ref: projectRef },
      { id: "certification", ref: certificationRef },
      { id: "education", ref: educationRef },
    ];

    const scrollPosition = sideContainerRef.current.scrollTop;
    let currentSection = "about";

    sectionPositions.forEach((section) => {
      if (section.ref.current.offsetTop - 100 <= scrollPosition) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    const container = sideContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
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
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "project", label: "Project" },
              { id: "certification", label: "Certification" },
              { id: "education", label: "Education" },
            ].map((item) => (
              <p
                key={item.id}
                className={activeSection === item.id ? "activeNav" : ""}
              >
                <a href={`#${item.id}`}>
                  <hr /> {item.label}
                </a>
              </p>
            ))}
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
        <div className="sideContainer" ref={sideContainerRef}>
          <div id="about" ref={aboutRef}>
            <About />
          </div>
          <div id="experience" ref={experienceRef}>
            <Experience />
          </div>
          <div id="project" ref={projectRef}>
            <Project />
          </div>
          <div id="certification" ref={certificationRef}>
            <Certification />
          </div>
          <div id="education" ref={educationRef}>
            <Education />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
