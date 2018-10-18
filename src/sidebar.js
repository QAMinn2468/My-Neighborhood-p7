import React, { Component } from 'react'
import './index.css'
import Figure from './figure.js'

/*********************************Start of Component***************************/
class Sidebar extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
  this.setState({
    query: query
  })
}


/********************************Render Method*********************************/
  render() {
    const listed = document.getElementById(listed)



    return (
      <div className="sidebar">
        <div className="filter">
          <input
              aria-label="input"
              className="filterBox"
              type="text"
              placeholder="  Filter by Name"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
              ></input>
        </div>

        <h2>Results</h2>
          <ol className="filteredList"
              type="1"
              places={this.props.places}
              >
              {this.props.places
                .map(place => (
                  <li key={place.title}
                      tabIndex="0"
                      id="listed"
                      onClick={(event) =>
                        listed.appendChild(
                          <Figure place={this.props.place}/>
                        )}>
                      {place.title}
                  </li>
              ))
            }
          </ol>
      </div>
    );
  }
}

export default Sidebar;
