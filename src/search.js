import React, { Component } from 'react'

class Search extends Component {
  state = {
    query: '',
    resultPlaces: []
  }

  // updateQuery = (query) => {
  //   this.setState({
  //     query: query
  //   })
  //   this.searchForPlace(query)
  // }

  // searchForPlace = (query) => {
  //   if (query) {
  //   XXXXXXXXXXXXXXXX.then((resultPlaces) => {
  //     if (resultPlaces.error) {
  //       this.setState({ resultPlaces: [] })
  //     } else {
  //       this.setState({ resultPlaces: resultPlaces })
  //     }
  //   })
  // } else {
  //   this.setState({ resultPlaces: [] })
  // }
  // }

  render() {

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
              />
                </div>
              </div>


              <div className="search-places-results">
                <ol className="placesList">
                  {
                    this.state.resultPlaces.map(resultPlace => {
                      let isOpen = false
                      this.props.places.map(place => (
                        place.title === resultPlace.title ? isOpen = true : 'none'
                      ))

                      return(
                        <li key={resultPlace[i]}>
                          <Place place={resultPlace}/>
                        </li>
                      )
                  })
                }
                </ol>
              </div>
            </div>
     )}
}


export default Search
