import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

import "../css/books.css";
import matchSorter from 'match-sorter'

class Books extends Component {
  render() {
    const reactTablerows = this.props.state.reactTablerows;
    return (
      <div className="Books">
        <div className='instructions'>
          <h2>
            I listen to a lot of book!
          <br />
            Below is a list of all books I have recorded on <a href="https://www.goodreads.com/user/show/30980905-david-farley" target="_blank" >Goodreads</a>, that I have listened to in the past 5 years.
          <br />
            See the stuff I have been reading!
          </h2>

          <h2 className="Books-title">Try searching for your favorite book or author!.</h2>
          <h4>
            Enter text in search bar to filter table by column contents. <br />
            Click column headers to sort the table by column. <br />
            Click and drag dividers to re-size columns.
        </h4>
        </div>
        {/* this is for the loading icon, it needs all these nested divs to work. */}
        {this.props.state.loading ? <div className="lds-ring">
          <div></div><div></div><div></div><div></div></div> : null}
        <ReactTable
          data={reactTablerows}
          filterable
          columns={[
            {
              columns: [
                {
                  Header: "Title",
                  accessor: "Title",
                  minWidth: 300,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["Title"] }),
                  filterAll: true
                },
                {
                  Header: "Author",
                  accessor: "Author",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["Author"] }),
                  filterAll: true
                },
                {
                  Header: "Finished",
                  accessor: "Finished",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["Finished"] }),
                  filterAll: true

                },
                {
                  Header: "Date Recorded",
                  accessor: "DateRecorded",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["DateRecorded"] }),
                  filterAll: true
                },
                {
                  Header: "My Rating",
                  accessor: "MyRating",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["MyRating"] }),
                  filterAll: true
                },
                {
                  Header: "Average Rating",
                  accessor: "AverageRating",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["AverageRating"] }),
                  filterAll: true
                },
                {
                  Header: "Number Of Pages",
                  accessor: "NumberOfPages",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NumberOfPages"] }),
                  filterAll: true
                },
                {
                  Header: "Publisher",
                  accessor: "Publisher",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["Publisher"] }),
                  filterAll: true
                },
                {
                  Header: "Year Published",
                  accessor: "YearPublished",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["YearPublished"] }),
                  filterAll: true
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
