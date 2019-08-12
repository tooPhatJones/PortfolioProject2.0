import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
//import "./index.css";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    console.log(this.state.data)
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                }
              ]
            }
          ]}
          defaultPageSize={80}
          style={{
            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

//render(<Demo />, document.getElementById("root"));
export default Demo;