import React, { Component } from "react";
import NavHeader from "./navHeader.js";
import Books from "./Books.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { BrowserRouter, StaticRouter, Switch, Route } from "react-router-dom";
import demo from "./demo.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchval: "",
      reactTablerows: [{}]
    };
  }

//update the state for the Books componenet, 
   updatesate = (newsate) =>{
     this.setState({reactTablerows: newsate})
   } 
//also for the books component
  handleSubmit = e => {
    this.setState({ searchval: e.target.value });
    console.log(e.target.value)
  };

  render() {
    return (
      <BrowserRouter>
      <div>
      <NavHeader />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" exact component={About} />
          <Route path="/books" render={() => <Books handleSubmit={this.handleSubmit} updatesate={this.updatesate} state={this.state} />} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }




}

export default App;
