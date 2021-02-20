import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Intro.css";

function Intro() {
  return (
    <div>
      <Link to="/about">
        <Button variant="outline" className="btn-warning" id="aboutBtn">
          About
        </Button>
      </Link>

      <Link to="/contact">
        {" "}
        <Button variant="outline" className="btn-warning" id="contactBtn">
          Contact
        </Button>
      </Link>

      <Link to="/portfolio">
        {" "}
        <Button variant="outline" className="btn-warning" id="portfolioBtn">
          Portfolio
        </Button>
      </Link>
    </div>
  );
}

export default Intro;
