import React, { Component } from "react";
import ReactTable from "react-table";
import Tooltip from "react-simple-tooltip";
import axios from "axios";
import "../css/books.css";
import About from "./About.js";
class Books extends Component {
  constructor(props) {
    super(props);
    //this.props.updatesate()
    //this.search()
  }


  search = () => {
    console.log(this.props.state.searchval);
    axios
      .get(
        'https://oerkomv6wh.execute-api.us-east-2.amazonaws.com/dev/?val="' +
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

  componentDidMount = () => {
    //this.search();
  }

  render() {

    const reactTablerows = this.props.state.reactTablerows;
    return (
      <div className="Books">
        <h2>
          I listen to a lot of book!
          <br />
          Below is a list of all books I have recorded on <a href="https://www.goodreads.com/user/show/30980905-david-farley" target="_blank" >Goodreads</a>, that I have listened to in the past 5 years.
          <br />
          See the stuff I have been reading!
          </h2>
        <div className='searchcontainer'>
          <h2 className="Books-title">Try searching an author or title.</h2>
          <h4>
            Click collumn headers to sort the table by collumn. <br />
            Hit enter to search.
        </h4>
          <div className="searchbar">
            <input
              className="inputclass"
              placeholder="Search Author or Title"
              type="text"
              name="username"
              onKeyPress={this.enterPressed.bind(this)}
              onChange={this.props.handleSubmit}
            />
            <button onClick={this.search}>Search Book List</button>
          </div>
        </div>
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

export default Books;
