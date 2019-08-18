import axios from "axios";

var event = {
    name: "name",
    message: "this is a message",
    phonenumber: 12346789,
    email: "email@email.com"
  }


function test(){
    axios
    .post(
      'https://ncud1985qf.execute-api.us-east-2.amazonaws.com/devforsuggestion/?val="' +
      event + '"'
    )
    .then(res => {
      this.props.updatesate(res.data);
      console.log('post fired');
      return
    });
}

test();