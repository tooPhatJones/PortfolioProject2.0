import React, { Component } from "react";
import "../css/home.css";
import ReactTable from "react-table";
import Tooltip from "react-simple-tooltip";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    //this.props.updatesate()
    //this.search()
  }

  
  search = () => {
    console.log(this.props.state.searchval);
    axios
      .get(
        'https://c38ndos3a1.execute-api.us-east-2.amazonaws.com/dev?val="' +
        this.props.state.searchval + '"'
      )
      .then(res => {
        this.props.updatesate(res.data);
        console.log('search fired');
        return
      });

  };


  enterPressed(event) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      //13 is the enter keycode
      this.search();
    }
  }

  componentDidMount = () =>{
    this.search();
  }

  render() {
    
    const reactTablerows = this.props.state.reactTablerows;
    return (
      <div className="Home">
        <h3 className="Home-title">Try searching an author or title.</h3>
        <h4>
          Or leave the search bar blank to see all 1300+ books on my list.
        </h4>
        <Tooltip content="You can also hit enter to search">
          <input
            placeholder="Search Author or Title"
            type="text"
            name="username"
            onKeyPress={this.enterPressed.bind(this)}
            onChange={this.props.handleSubmit}
          />
        </Tooltip>

        <Tooltip content="Hit enter to search">
          <button onClick={this.search}>Search Book List</button>
        </Tooltip>

        <ReactTable
          data={reactTablerows}
          columns={[
            {
              columns: [
                {
                  Header: "Title",
                  accessor: "Title",
                  minWidth: 300
                },
                {
                  Header: "Author",
                  accessor: "Author"
                },
                {
                  Header: "Finished",
                  accessor: "Finished"
                },
                {
                  Header: "Date Recorded",
                  accessor: "DateRecorded"
                },
                {
                  Header: "My Rating",
                  accessor: "MyRating"
                },
                {
                  Header: "Average Rating",
                  accessor: "AverageRating"
                },
                {
                  Header: "Number Of Pages",
                  accessor: "NumberOfPages"
                },
                {
                  Header: "Publisher",
                  accessor: "Publisher"
                },
                {
                  Header: "Year Published",
                  accessor: "YearPublished"
                }
              ]
            }
          ]}
          defaultPageSize={50}
          className="-striped -highlight"
          style={{
            height: "780px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
        />
      </div>
    );
  }
}

export default Home;
