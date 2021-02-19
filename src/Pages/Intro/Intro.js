import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Intro.css";

function Intro() {
  return (
    <div>
      <Link to="/about">
        <Button variant="outline-warning" size="lg" id="aboutBtn">
          About
        </Button>
      </Link>

      <Link to="/contact">
        {" "}
        <Button variant="outline-warning" size="lg" id="contactBtn">
          Contact
        </Button>
      </Link>

      <Link to="/portfolio">
        {" "}
        <Button variant="outline-warning" size="lg" id="portfolioBtn">
          Portfolio
        </Button>
      </Link>
    </div>
  );
}

export default Intro;
