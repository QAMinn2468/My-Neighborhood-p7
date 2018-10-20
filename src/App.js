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

closeAllMarkers = () => {
  const markers = this.state.markers.map( marker => {
    marker.isVisible = false
    return marker
  })
  this.setState({markers: Object.assign(this.state.markers, markers)})
}

handleMarkerClick = (marker) => {
  this.closeAllMarkers()
  marker.isMarkerShown = true
  this.setState({markers: Object.assign(this.state.markers, marker)})
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
        <Map {...this.state}
          handleMarkerClick={this.handleMarkerClick}/>
      </div>
    );
  }
}

export default App;
