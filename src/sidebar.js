import React, { Component } from 'react'
import './index.css'
import Result from './result.js'

/*********************************Start of Component***************************/
class Sidebar extends Component {
  state = {
    query: ''
  }

handleFilterPlaces = () => {
  if (this.state.query.trim() !== "") {
    const places = this.props.places.filter( place => place.title
        .toLowerCase()
        .includes(this.state.query.toLowerCase()))
     return places
  }
  return this.props.places
}

updateQuery = event => {
  this.setState({
    query: event.target.value
  })
  const markers = this.props.places.map(place => {
    const isMatched = place.title
      .toLowerCase()
      .includes(event.target.value.toLowerCase())
    const marker = this.props.markers.find(marker => marker.id === place.id)
    if (isMatched) {
      marker.isMarkerShown = true
    } else {
      marker.isMarkerShown = false
    }
    return marker
  })
  this.props.updateSuperState({markers})
  }


/********************************Render Method*********************************/
  render() {

    return (
      <div className="sidebar" >
        <div className="filter">
          <input
              aria-label="input"
              className="filterBox"
              type="search"
              placeholder="  Filter by Name"
              value={this.state.query}
              onChange={(event) => {
                this.updateQuery(event)
              }}>
              </input>
        </div>
          <Result
              {...this.state}
              places = {this.handleFilterPlaces()}
              handleListItemClick={this.props.handleListItemClick}
              />

      </div>
    );
  }
}

export default Sidebar;
