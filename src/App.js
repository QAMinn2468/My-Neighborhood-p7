import React, { Component } from 'react'
import './index.css'
import Map from './map.js'
import Banner from './banner.js'
import Sidebar from './sidebar.js'


/*********************************Start of Component***************************/

class App extends Component {
  state = {
    places: [],
    markers: [],
    updateSuperState: obj => {
      this.setState(obj)
    }
    }



closeAllMarkers = () => {
  const markers = this.state.markers.map( marker => {
    marker.isOpen = false
    return marker
  })
  this.setState({markers: Object.assign(this.state.markers, markers)})
}

handleMarkerClick = marker => {
  this.closeAllMarkers()
  marker.isOpen = true
  this.setState({markers: Object.assign(this.state.markers, marker) })
  const places = this.state.places.find( place => place.id === marker.id )
}

handleListItemClick = place => {
  const marker = this.state.markers.find( marker => marker.id === place.id )
  this.handleMarkerClick(marker)
}



/***************************componentDidMount**********************************/

  componentDidMount() {
      fetch('https://api.myjson.com/bins/ckhas')
        .then(res => res.json())
        .then(myJSON => this.setState({ places: myJSON, markers: myJSON }))
        .catch(error =>
          alert("I'm sorry, there was an error"))
  }

/********************************Render Method*********************************/

  render() {
    return (
      <div className="App">
        <Banner />
        <Sidebar {...this.state} handleListItemClick={this.handleListItemClick} />
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick} />
      </div>
    );
  }
}

export default App;
