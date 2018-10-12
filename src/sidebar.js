import React, { Component } from 'react';
import './index.css';



const letters = ['A', 'B', 'C', 'D', 'E']

function printList() {
  letters.map(letter => (
    <li>{letter}</li>)
  )}


class Sidebar extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
  this.setState({
    query: query
  })
  // this.searchForPlace(query)
}

  render() {
    return (
      <div className="sidebar">
        <div className="filter">
          <input
              className="filterBox"
              type="text"
              aria-label="input box"
              placeholder="  Filter by Name"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
              ></input>
        </div>

        <h2>Results</h2>
          <ol type="A">
            <li></li>
          {printList()}
          </ol>
      </div>
    );
  }
}

export default Sidebar;
