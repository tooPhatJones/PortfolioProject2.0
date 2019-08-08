import React, { Component} from "react";
import axios from 'axios';

class Home extends Component {
  componentDidMount(){
axios.get('https://8h0rf5gmh3.execute-api.us-west-1.amazonaws.com/dev/simpletest?min=1&max=10').then(res =>{
  console.log(res)

})
  }
  render() {
    return (
        <div className="Home">
         
            <h1 className="Home-title">Home page</h1>

         
        </div>
    );
  }
}

export default Home;