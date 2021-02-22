import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Intro from "./Pages/Intro/Intro";
import "./App.css";

//===================================================================================================================

// App Methods and Return Function===================================================================================================================
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />

          <Route exact path="/about" component={About} />

          <Route exact path="/contact" component={Contact} />

          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
      <canvas id="noise" className="noise"></canvas>
      <div className="vignette"></div>
    </div>
  );
}

export default App;
