import React, { Component } from "react";
import NavHeader from "./navHeader.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
//import {hot} from "react-hot-loader";
import "../css/app.css";
import icon from '../images/icon.png';
import { StaticRouter, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <StaticRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home"  component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>

        <div className="App">
        <NavHeader />
          <header className="App-header">
            <img src={icon} className="App-logo" alt="logo" />
            <h1 className="App-title">React Express Starter</h1>
          </header>

        </div>
      </StaticRouter>
    );
  }
}

export default App;