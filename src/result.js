import React, { Component } from 'react'
import './index.css'

/*********************************Start of Component***************************/
class Result extends Component {

/********************************Render Method*********************************/
  render() {

    return (
      <div>
        <h2>Results</h2>
          <ul
              className="filteredList">
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
    )
  }
}  

export default Result;
