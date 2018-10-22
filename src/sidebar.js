import React, { Component } from 'react'
import './index.css'

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
                this.updateQuery(event.target.value)}
              ></input>
        </div>

        <h2>Results</h2>
          <ul
              className="filteredList"
              places={this.props.places}>
              {this.props.places && this.props.places
                .map((place, index) => (
                  <li key={index}
                      tabIndex="0"
                      id={index}
                      onClick={() => this.props.handleListItemClick(this.props) }>
                        <p>{ place.title }</p>
                  </li>
              ))
            }
          </ul>
      </div>
    );
  }
}

export default Sidebar;
