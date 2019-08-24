import React, { Component } from "react";
import NavHeader from "./navHeader.js";
import Books from "./Books.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { BrowserRouter, StaticRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchval: "",
      reactTablerows: [{}],
      loading: true
    };
  }

  search = () => {
    this.setState({loading: true});
    axios
      .get(
        'https://oerkomv6wh.execute-api.us-east-2.amazonaws.com/dev/?val="' +
        this.state.searchval + '"'
      )
      .then(res => {
        this.setState({reactTablerows: res.data});
        this.setState({loading: false});
        console.log('got books');
        return
      });
  };

  componentDidMount =() =>{
    this.search();
  }

  render() {
    return (
      <BrowserRouter>
      <div>
      <NavHeader />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" exact component={About} />
          <Route path="/books" render={() => <Books search={this.search} state={this.state} />} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
