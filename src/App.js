import React, { Component } from 'react';
import './index.css';
import Map from './map.js'
import Banner from './banner.js'
import Sidebar from './sidebar.js'


/*********************************Start of Component***************************/

class App extends Component {
  state = {
    places: []
  }

  componentDidMount() {
      fetch('https://api.myjson.com/bins/1bsbyw')
        .then(res => res.json())
        .then(myJSON => this.setState({ places: myJSON }))
        .catch(error => console.log(error));
  }

/********************************Render Method*********************************/

  render() {
    return (
      <div className="App">
        <Banner />
        <Sidebar places={this.state.places} />
        <Map places={this.state.places} />
      </div>
    );
  }
}

export default App;
