import React, { Component} from "react";
//import {hot} from "react-hot-loader";
import "../app.css";
import icon from '../icon.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        
      </div>
    );
  }
}

export default App;