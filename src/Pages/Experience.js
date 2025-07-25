import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experienceContainer">
      <h1 className="heading">Experience</h1> 
      <div className="experienceParts">
        <p>Jun - Aug 25</p>
        <div className="experienceSubPart">
          <h2>Web Developer Intern</h2>
          <p>
            Worked on real-time frontend development projects, building
            responsive and interactive user interfaces using React.js, HTML,
            CSS, and JavaScript.
          </p>
          <p>
            Collaborated on creating dynamic web pages with modern UI/UX
            practices and reusable components.
          </p>
          <p>
            Strengthened skills in web design, component-based architecture, and
            responsive development for mobile and desktop platforms.
          </p>
          <div className="experienceSubPart2">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
