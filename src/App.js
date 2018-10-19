import React, { Component } from 'react'
import './index.css'
import Map from './map.js'
import Banner from './banner.js'
import Sidebar from './sidebar.js'


/*********************************Start of Component***************************/

class App extends Component {
  state = {
    places: [],
    markers: []
    }

  componentDidMount() {
      fetch('https://api.myjson.com/bins/1bsbyw')
        .then(res => res.json())
        .then(myJSON => this.setState({ places: myJSON, markers: myJSON }))
        .catch(error =>
          alert("I'm sorry, there was an error"));
  }

/********************************Render Method*********************************/

  render() {
    return (
      <div className="App">
        <Banner />
        <Sidebar {...this.state} />
        <Map {...this.state} />
      </div>
    );
  }
}

export default App;
