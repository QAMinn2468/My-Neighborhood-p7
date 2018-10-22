import React, { Component } from 'react'
import './index.css'

/*********************************Start of Component***************************/
class Sidebar extends Component {
  state = {
    query: ''
  }

updateQuery = event => {
  this.setState({
    query: event.target.value
  })
  console.log(event.target.value)
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
      <div className="sidebar">
        <div className="filter">
          <input
              aria-label="input"
              className="filterBox"
              type="search"
              placeholder="  Filter by Name"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event)}
              ></input>
        </div>

        <h2>Results</h2>
          <ul
              className="filteredList"
              places={this.props.places}>
              {this.props.places && this.props.places
                .map((place, index) => (
                  <li key={ index }
                      tabIndex="0"
                      onClick={() => this.props.handleListItemClick(place) }>
                        { place.title }
                  </li>
                ))
              }
          </ul>
      </div>
    );
  }
}

export default Sidebar;
