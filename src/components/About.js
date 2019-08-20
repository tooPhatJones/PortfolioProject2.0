import React, { Component} from "react";
import icon from '../images/mugshot.jpg';
import "../css/app.css";

class About extends Component {
  render() {
    return (
        <div className="About">
         
            <h1 className="About-title">About page</h1>
            <header className="App-header">
            <img src={icon} className="App-logo" alt="logo" class="mugshot" />
            <h1 className="App-title">Hi Im David!</h1>
            <h2>
              I am a voracious book listener. Below is a list of all books I have recorded on <a href="https://www.goodreads.com/user/show/30980905-david-farley" target="_blank" >Goodreads</a>, that I have listened to in the past 5 years. You can search the list by Title Or Author, or do alphabetical sorts on any of the values to see the stuff I am readings. 
              Please suggest a book for me to read with my book sugester below!
            </h2>
          </header>
        </div>
    );
  }
}


export default About;