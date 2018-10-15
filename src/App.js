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
    const request = new XMLHttpRequest()
      request.open('GET', 'https://api.myjson.com/bins/6k8i0', true)
      request.onload = function () {

    // Begin accessing JSON data here
    const placesArray = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      console.log(placesArray)

      this.setState({ places: placesArray })

    }

      else {
      const errorMessage = document.createElement('alert')
      errorMessage.textContent = `There was an error.`
      console.log(alert)
    }


  }

  request.send()

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
