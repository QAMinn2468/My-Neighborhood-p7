import React, { Component } from 'react';
import './index.css';
import Map from './map.js'
import Banner from './banner.js'
import Sidebar from './sidebar.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Banner />
        <Sidebar />
        <Map />
      </div>
    );
  }
}

export default App;
