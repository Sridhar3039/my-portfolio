import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="educationContainer">
      <h1 className="heading">Education</h1>
      <div className="educationParts">
        <p>2021 - 2024</p>
        <div className="educationSubPart">
          <h2>Bachelor of Computer Applications (BCA)</h2>
          <h4>SRI AUROBINDO COLLEGE</h4>
        </div>
      </div>
      <div className="educationParts">
        <p>2020 - 2021</p>
        <div className="educationSubPart">
          <h2>2 PUC (CEBA)</h2>
          <h4>K.N.E TRUST RESI PU COLLEGE</h4>
        </div>
      </div>
      <div className="educationParts">
        <p>2018 - 2019</p>
        <div className="educationSubPart">
          <h2>10th (CBSE)</h2>
          <h4>K.N.E TRUST RESI PU COLLEGE</h4>
        </div>
      </div>
    </div>
  );
}
export default Education;
