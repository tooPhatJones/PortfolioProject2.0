
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      name: "",
      message: "",
      phonenumber: "",
      email: ""
    };
  }

  postSuggestion = () => {
    if (this.state.name == "") {
      alert("Please add your name");
    } else {
      axios
        .get(
          'https://jzmjq2p2qe.execute-api.us-east-2.amazonaws.com/dev/?name="' + this.state.name + '" &email="' + this.state.email + '"&phonenumber="' + this.state.phonenumber + '" &message="' + this.state.message + '"&author="' + this.state.author + '"&title="' + this.state.title + '"'
        )
        .then(res => {
          console.log('post fired');
          this.setState({
            title: "",
            author: "",
            name: "",
            message: "",
            phonenumber: "",
            email: ""
          })
          alert("Thanks for contacting me!\rI will get your message soon.");
        });
    
    }
  };

  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }

  render = () => {
    return (
      <div className="contactclass">
        <h2>
          Put in your information to contact me!
        </h2>
        <h3>
          Optionally, suggest your favorite book I have not read, after you have checked out my <Link to="/home">reading history</Link>.
        </h3>
        <div className="centered">
          <table className="contactTable">
            <tbody>
              <tr>
                <td>
                  <label className="label" >Name: </label>
                </td>
                <td>
                  <input className="inputclass" onChange={this.handleChange} name="name"></input>*
              </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Phone: </label>
                </td>
                <td>
                  <input type="number" className="inputclass" onChange={this.handleChange} name="phonenumber"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Email: </label>
                </td>
                <td>
                  <input className="inputclass" onChange={this.handleChange} name="email"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Message: </label>
                </td>
                <td>
                  <textarea className="textareaclass" onChange={this.handleChange} name="message"></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Book Title: </label>
                </td>
                <td>
                  <input className="inputclass" onChange={this.handleChange} name="title"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">Author: </label>
                </td>
                <td>
                  <input className="inputclass" onChange={this.handleChange} name="author"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button onClick={this.postSuggestion}>Save</button>

      </div >
    )
  }
}


export default Contact;

