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
            Rough pomfret lemon shark plownose chimaera southern sandfish
            kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin
            gulper South American Lungfish mahi-mahi, butterflyfish glass
            catfish soapfish ling gray mullet! Warbonnet denticle herring
            spiny-back cod straptail tailor zebra loach sea lamprey
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
