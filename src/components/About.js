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
              <h1>Hi! My name is David Farley</h1>
              <h2>I'm a self taught web developer new to the Bay Area. <br />
                I love to learn, and work on websites. <br />
                When I am not working, I enjoy cycling, reading, and haveing game nights with friends.
                </h2>
              <h2>
              </h2>
              <h1>
                How I made this website
              </h1>
              <h3>
                I made this website with React, Nodejs, Webpack, and express hosted on Netlify through Git.<br />
                The backend is AWS Lambda and Mysql RDS.<br />
                Code for this site on <a href="https://github.com/davidfarley71/PortfolioProject2.0">Github</a>.<br />
               My <a href="https://www.linkedin.com/in/david-farley-221b21a6/">LinkedIn</a> profile.<br />

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