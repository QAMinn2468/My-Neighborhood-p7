import React, { Component } from 'react';
import './index.css';

function( {
  this function will map the places array iterating over the Place Component
})

class Place extends Component {

  render() {
    return (
      <div className="place">
        <h2>{place.title}</h2>
        <hr />
        <a className="place-website" href={place.website}>{place.website}</a>
        <image src={place.photo} alt=`a photo of {place.title}`/>
        <p className="place-attribution">{place.attribution}</p>

      </div>
    );
  }
}

export default Place;
