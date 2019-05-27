import React, { Component} from "react";
//import {hot} from "react-hot-loader";
import "../app.css";
import icon from '../icon.png';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        
      </div>
      </Router>
    );
  }
}

export default App;