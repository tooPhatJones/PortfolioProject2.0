import React, { Component, useCallback } from "react";
import NavHeader from "./navHeader.js";
import Books from "./Books.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { BrowserRouter, StaticRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import goodreads from './goodreads'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchval: "",
      reactTablerows: goodreads,
    };
  }

  // search = () => {
  //   axios
  //     .get(
  //       'https://oerkomv6wh.execute-api.us-east-2.amazonaws.com/dev/?val="' +
  //       this.state.searchval + '"'
  //     )
  //     .then(res => {
  //       this.setState({reactTablerows: res.data});
  //       console.log('got books');
  //       return
  //     });
  // };

  // componentDidMount =() =>{
  //   // this.search();
  // }

  render() {
    return (
      <BrowserRouter>
        <NavHeader />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/books" render={() => <Books search={this.search} state={this.state} />} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;


