import React, { Component } from 'react';
import './index.css';



class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="search">
        </div>
        <div className="filter">
          <input className="filterBox" type="text" aria-label="input box" placeholder="  Filter by Name"></input>
        </div>

        <h2>Results</h2>
      </div>
    );
  }
}

export default Sidebar;
