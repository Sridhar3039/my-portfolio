import React from "react";
import "./Certification.css";

function Certification() {
  return (
    <div className="certificationContainer">
      <h1 className="heading">Certification</h1>
      <div className="certificationParts">
        <p>Oct 24 - May 25</p>
        <div className="certificationSubPart">
          <h2>Full Stack Developer</h2>
          <h3>Pentagon Space, Vijayanagar</h3>
          <p>
            I completed a Java Full Stack Development course at Pentagon Space,
            Bangalore. It focused on hands-on training in front-end and back-end
            web technologies.
          </p>
          <p>
            I worked with HTML, CSS, JavaScript, and React.js for building user
            interfaces. On the backend, I learned Core Java, JDBC, JSP,
            Servlets, and Spring Boot.
          </p>
          <p>
            I also gained experience with MySQL for database management.
            Development tools like Eclipse, VS Code, Git, GitHub, and Postman
            were used.
          </p>
          <div className="certificationSubPart2">
            <p>MySQL</p>
            <p>React.js</p>
            <p>JDBC</p>
            <p>Servlets</p>
            <p>Spring Boot</p>
            <p>JSP</p>
            <p>Jquery</p>
            <p>AJAX</p>
            <p>Git & GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Certification;
