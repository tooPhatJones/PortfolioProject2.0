import React, { Component } from "react";
import icon from '../images/mugshot.jpg';
import "../css/app.css";
import logo from '../images/logo.svg';
import Contact from "./Contact";

class About extends Component {
  render() {
    return (
      <div className="About">
        <header className="App-header">
          <div className="wrapper">
            <div className="gridbox">
              <div className="nextToEachOther">
                <h1>Hi! My name is David Farley</h1>
                <p>
                  I made this website with React, Nodejs, Webpack, and express hosted on Netlify through Git.<br />
                  The backend is AWS Lambda and Mysql RDS.<br />
                  Code for this site on <a target="blank" href="https://github.com/davidfarley71/PortfolioProject2.0">Github</a>.<br />
                  My <a target="blank" href="https://www.linkedin.com/in/david-farley-221b21a6/">LinkedIn</a> profile.<br />
                </p>
                <p>
                  My next project is a React Native app.
              </p>
                <p>
                  Stay tuned for updates!
              </p>
                <div className="applogocontainer">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </div >
              <div className="nextToEachOther">
                <img src={icon} className="mugshot" alt="logo" />
                <p>I'm a web developer in the San Francisco Bay Area.
                    </p>
                <p>
                  I love to learn, and work on websites.
                    </p>
                <p>
                  When I am not working, I enjoy cycling, reading, and having game nights with friends.
                    </p>

              </div>
            </div>

          </div>
        </header>
      </div>
    );
  }
}


export default About;