import React, { Component } from 'react';
import './index.css';
// import Search from './search.js'
// <Search />



class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="search"></div>
        <h2>Search Results</h2>
      </div>
    );
  }
}

export default Sidebar;
