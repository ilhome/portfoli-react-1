import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Ilhome</span>
        </h4>
        <p className="about-text">
          I am a junior frontend developer interested in building usable,
          useful, well-constructed websites and applications. Interested in
          contuniation of learning and cooperation with excellent people.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Abdubannoev Ilkhomjon</p>
            <p>: 24</p>
            <p>: Uzbek</p>
            <p>: English, Korean, Uzbek</p>
            <p>: 7-4 Dongil-ro 36-gil, Gunja-dong, Seoul</p>
            <p>: South Korea, Uzbekistan</p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1U65sw5_opxXxyoVOfLSyg8AQ9cBuwYPN/view?usp=sharing"
          download
        >
          <button className="btn">Download Resume</button>
        </a>
        <a href="https://www.freecodecamp.org/" download>
          <button className="btn">Sertifications</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
