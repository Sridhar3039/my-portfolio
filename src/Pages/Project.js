import React from "react";
import "./Project.css";
import projectImg1 from "../images/projectImg1.png";
import projectImg2 from "../images/projectImg2.png";
import projectImg3 from "../images/projectImg3.png";

function Project() {
  return (
    <div className="projectContainer">
      <h1 className="heading">Project</h1>
      <div className="projectParts">
        <div className="projectImg">
          <img src={projectImg1} alt="projectImg" />
        </div>
        <div className="projectText">
          <h2>Event Management</h2>
          <p>
            Designed and developed a responsive event management website where
            users can view available event services and initiate bookings.
          </p>
          <p>
            Implemented dynamic UI features like date and time slot selection
            using JavaScript. Focused on smooth user experience, mobile
            responsiveness, and clean visual layout.
          </p>
          <div className="projectSubPart">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>JDBC</p>
            <p>Servlets</p>
            <p>JSP</p>
          </div>
        </div>
      </div>
      <div className="projectParts">
        <div className="projectImg">
          <img src={projectImg2} alt="projectImg" />
        </div>
        <div className="projectText">
          <h2>Watch Anime</h2>
          <p>
            Designed and built a static web application for anime enthusiasts to
            browse and explore anime content.
          </p>
          <p>
            Used clean, responsive HTML/CSS layout to create visually appealing
            pages and sections.
          </p>
          <div className="projectSubPart">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
      <div className="projectParts">
        <div className="projectImg">
          <img src={projectImg3} alt="projectImg" />
        </div>
        <div className="projectText">
          <h2>Twitter Fake and Clone Account Detection System</h2>
          <p>
            Developed a web-based application to detect fake and clone Twitter
            accounts using user behavior patterns and classification algorithms.
          </p>
          <p>
            Implemented a Random Forest Classifier to analyze profile data and
            identify suspicious activity based on features like profile
            similarity, follower ratios, and tweet patterns.
          </p>
          <div className="projectSubPart">
            <p>Python</p>
            <p>Flask</p>
            <p>Machine Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
