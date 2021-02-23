import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Cog from "../../cog_mechanicus_v2.png";

import "./Intro.css";

function Intro() {
  return (
    <div className="Intro">
      <div className="innerSelf">
        <div id="introduction">
          <p className="holo">
            Hello, My name is Zachary Springer. I am a Web Designer who would
            very much like to add my skills to a company that wants to create
            beautiful and intrecit web design. I am good at picking up routines
            and not afraid to work with people who are willing to be on a team.
            I seek to expand my knowledge of web design to cover a broad
            spectrum, and I am more than willing to learn something new if it
            means getting the job done.
            <br />
            Please Consider Me for Your Company!
          </p>
        </div>
        <br />
        <div className="imgWrapper">
          <img src={Cog} alt="Cog" id="omniCog" />
        </div>
      </div>
      <Link to="/about">
        <Button variant="outline" className="btn-warning" id="aboutBtn">
          About
        </Button>
      </Link>

      <Link to="/contact">
        <Button variant="outline" className="btn-warning" id="contactBtn">
          Contact
        </Button>
      </Link>

      <Link to="/portfolio">
        <Button variant="outline" className="btn-warning" id="portfolioBtn">
          Portfolio
        </Button>
      </Link>
    </div>
  );
}

export default Intro;
