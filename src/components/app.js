import React, { Component } from "react";
import NavHeader from "./navHeader.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Demo from "./Demo";
import "../css/app.css";


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
  }

//update the state for the Home componenet, 
   updatesate = (newsate) =>{
     this.setState({reactTablerows: newsate})
   } 

  handleSubmit = e => {
    this.setState({ searchval: e.target.value });
    console.log(e.target.value)
  };

  render() {
    return (
      <BrowserRouter>
        <NavHeader />
        <Switch>
          <Route path="/" exact render={() => <Home handleSubmit={this.handleSubmit} updatesate={this.updatesate} state={this.state} />} />
          <Route path="/home" render={() => <Home handleSubmit={this.handleSubmit} updatesate={this.updatesate} state={this.state} />} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route path="/suggestA" exact component={SuggestABook} /> */}
          <Route path="/Demo" exact component={Demo} />
        </Switch>

        <div className="App" />
      </BrowserRouter>
    );
  }
}

export default App;
