import React, { Component} from "react";
import icon from '../images/icon.png';

class SuggestABook extends Component {
    constructor(props){
        super(props);

      this.state = {
          email: '',
          password: '',
      };
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    test= (e) => {
        console.log(this.state.email)
        //this.setState({password: e.target.value});
    }



    render = () =>{
        return (
        <div>
            <form name="Login">
              <input type="text" name="email" value={this.state.email} placeholder="Email Id" className="form-control" onChange={this.handleEmailChange.bind(this)} />
              <input name="password" value={this.state.password} placeholder="Password" type="password" className="form-control m-b-10" onChange={this.handlePasswordChange.bind(this)} />   
              <button type="button" className="m-t-20 orange" label="Sign in " onClick={this.test}>Sign in</button> 
          </form>
        </div>
      )
    }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     alert('Your username is: ' + this.input.value);
    //   };

    //   test = () =>{
    //       console.log(this.input.value)
        
    //   }
     
    //   render() {
    //     return (
    //       <form onSubmit={this.handleSubmit}>
    //         <label htmlFor="username">username</label>
    //         <input
    //           type="text"
    //           name="username"
    //           ref={(input) => this.input = input}
    //         />
    //         <button onClick={this.test}>click me</button>
    //       </form>
    //     );
    //   }
}


export default SuggestABook;