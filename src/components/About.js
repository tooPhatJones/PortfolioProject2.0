import React, { Component } from "react";
import icon from '../images/mugshot.jpg';
import "../css/app.css";

class About extends Component {
  render() {
    return (
      <div className="About">


        <header className="App-header">
          <div className="wrapper">
            <div className="gridbox">
              <img src={icon} className="mugshot" alt="logo" />
            </div>


            <div className="gridbox">
              <h1>Hi! my name is David Farley</h1>
                <h2>Im a self taugh web developer new to the bay area. <br />
                When Im not working, I love to cycle, read, and have game nights with friends.
                </h2>
              <h2>
              </h2>
              <h1>
                How I made this websight
              </h1>
              <h3>
                I made this websight with Nodejs, webpack, and express hosted on netlify through git.<br />
                The backend is AWS Lambda and Mysql RDS.<br />
              </h3>
              <h3>
                My next project is a React Native app.
              </h3>
              <h3>
                Stay tuned for updates!
              </h3>





            </div>
          </div>
        </header>
      </div>
    );
  }
}


export default About;