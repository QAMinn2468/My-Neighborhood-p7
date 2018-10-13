import React, { Component } from 'react';
import './index.css';

/*********************************Start of Component***************************/
class Sidebar extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
  this.setState({
    query: query
  })
  console.log(query)                                                            // Query prints to screen with each keystroke
}

/********************************Render Method*********************************/
  render() {
    return (
      <div className="sidebar">
        <div className="filter">
          <input
              className="filterBox"
              type="text"
              // aria-label="input box"                                         //this feels redundant, omitting for now.
              placeholder="  Filter by Name"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
              ></input>
        </div>

        <h2>Results</h2>
          <ol className="filteredList" type="1">
            <li>St. Jude Primary School</li>
            <li>Sacred Heart Church</li>
            <li>Fareham Public Library</li>
            <li>Fareham Train Station</li>
            <li>Fareham Leisure Centre</li>
          </ol>
      </div>
    );
  }
}

export default Sidebar;
