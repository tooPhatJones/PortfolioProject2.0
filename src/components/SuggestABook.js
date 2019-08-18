import React, { Component } from "react";
import icon from '../images/icon.png';
import axios from "axios";


class SuggestABook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: "trustytestname",
      message: "this is a message",
      phonenumber: 12346789,
      email: "email@email.com"
    };
  }

  postSuggestion = () => {
    axios
      .post(
        'https://ncud1985qf.execute-api.us-east-2.amazonaws.com/devforsuggestion/?name="' +
        this.state.name + '"& message="' +
        this.state.message + '"& phonenumber="' +
        this.state.phonenumber + '"& email="' +
        this.state.email + '"'
      )
      .then(res => {
        //this.props.updatesate(res.data);
        console.log('post fired');
        console.log(res);
        return
      });
  };

  handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }


  render = () => {
    return (
      <div>
        <button onClick={this.postSuggestion}>test</button>
        <input name="username"></input>
        <input name="s"></input>
        <input name="username"></input>
        <input name="username"></input>
        <input name="username"></input>
        <input name="username"></input>
        <input name="username"></input>
      </div>
    )
  }
}


export default SuggestABook;