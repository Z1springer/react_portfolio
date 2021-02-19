import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Intro from "./Pages/Intro/Intro";
import Cog from "./cog_mechanicus_v2.png";
import "./App.css";

//===================================================================================================================

// App Methods and Return Function===================================================================================================================
function App() {
  return (
    <div className="App">
      <div id="introduction">
        <p className="holo">
          Rough pomfret lemon shark plownose chimaera southern sandfish kokanee
          northern sea robin Antarctic cod. Yellow-and-black triplefin gulper
          South American Lungfish mahi-mahi, butterflyfish glass catfish
          soapfish ling gray mullet! Warbonnet denticle herring spiny-back cod
          straptail tailor zebra loach sea lamprey
        </p>
      </div>
      <br />
      <div className="imgWrapper">
        <img src={Cog} alt="Cog" id="omniCog" />
      </div>

      <Router>
        <Route exact path="/" component={Intro} />

        <Route exact path="/about" component={About} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
      <div id="projecter" />
    </div>
  );
}

export default App;
