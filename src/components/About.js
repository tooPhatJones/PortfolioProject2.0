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
              <img src={icon} className="App-logo" alt="logo" className="mugshot" />
            </div>


            <div className="gridbox">
              <h1 className="App-title">Hi my name is David Farley</h1>
              <h2>
                I listen to a lot of books. Below is a list of all books I have recorded on <a href="https://www.goodreads.com/user/show/30980905-david-farley" target="_blank" >Goodreads</a>, that I have listened to in the past 5 years. You can search the list by Author or Title, or do alphabetical sorts on any of the rows to see the stuff I am readings.
            </h2>
              <h2>
                Please suggest a book for me to read below!
            </h2>
              <h2>
                If you want to hire me, please Include your contact information.
            </h2>
            </div>

            {/* <a href="./resumeaugust22019.pdf" target="_blank">resume</a> */}
          </div>

        </header>
      </div>
    );
  }
}


export default About;