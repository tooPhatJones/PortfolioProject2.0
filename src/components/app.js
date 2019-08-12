import React, { Component } from "react";
import NavHeader from "./navHeader.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Demo from "./Demo";
import "../css/app.css";
import axios from "axios";

import { BrowserRouter, StaticRouter, Switch, Route } from "react-router-dom";
import SuggestABook from "./SuggestABook.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: props.numbers,
      rows: "",
      searchval: "",
      reactTablerows: [{}]
    };
    this.search();
  }
  search = () => {
    console.log(this.state.searchval);
    axios
      .get(
        'https://8h0rf5gmh3.execute-api.us-west-1.amazonaws.com/dev/simpletest?val="' +
          this.state.searchval +'"'
      )
      .then(res => {
        this.setState({ reactTablerows: res.data });
      });
      console.log('serach fired');
  };

  handleSubmit = e => {
    this.setState({ searchval: e.target.value });
    console.log(e.target.value)
  };

  render() {
    return (
      <BrowserRouter>
        <NavHeader />
        <Switch>
          <Route path="/" exact render={() => <Home handleSubmit={this.handleSubmit} search={this.search} state={this.state}/>} />
          <Route path="/home" render={() => <Home handleSubmit={this.handleSubmit} search={this.search} state={this.state}/>} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/suggest" exact component={SuggestABook} />
          <Route path="/Demo" exact component={Demo} />
        </Switch>

        <div className="App" />
      </BrowserRouter>
    );
  }
}

export default App;
