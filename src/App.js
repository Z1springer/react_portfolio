import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Cog from "./cog_mechanicus_v2.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="imgWrapper">
        <img src={Cog} alt="Cog" id="omniCog" />
      </div>
      <br />
      <div id="introduction">
        <p>
          Rough pomfret lemon shark plownose chimaera southern sandfish kokanee
          northern sea robin Antarctic cod. Yellow-and-black triplefin gulper
          South American Lungfish mahi-mahi, butterflyfish glass catfish
          soapfish ling gray mullet! Warbonnet denticle herring spiny-back cod
          straptail tailor zebra loach sea lamprey
        </p>
      </div>
      <Router>
        <div className="About">
          <Route exact path="/about" component={About} />
        </div>
        <div className="Contact">
          <Route exact path="/contact" component={Contact} />
        </div>
        <div className="Portfolio">
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    </div>
  );
}

export default App;
