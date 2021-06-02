import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Ilhome.</span>
        </h1>
        <p className="h-sub-text">
          I am a junior frontend developer interested in building usable,
          useful, well-constructed websites and applications. Interested in
          contuniation of learning and cooperation with excellent people.
        </p>
        <div className="icons">
          <Link to="/https://www.udemy.com/" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
