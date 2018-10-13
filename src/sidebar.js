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
              aria-label="input box"
              placeholder="  Filter by Name"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
              ></input>
        </div>

        <h2>Results</h2>
          <ol type="1">
            <li></li>


          </ol>
      </div>
    );
  }
}

export default Sidebar;
