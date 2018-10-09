import React, { Component } from 'react';
import './index.css';
import Map from './map.js'
import Banner from './banner.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Banner />
        <Map />
      </div>
    );
  }
}

export default App;
