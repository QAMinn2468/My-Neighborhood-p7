import React, { Component } from 'react';
import './index.css';

function printList(place) {
  this.state.places.map(place =>
    <li>{place.title}
    </li>
  )
}


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
        <div className="search">
        </div>
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
          <ol onRender={ printList() }>
          </ol>
      </div>
    );
  }
}

export default Sidebar;
