import React, { Component } from "react"
import {
         withScriptjs,
         withGoogleMap,
         GoogleMap,
         Marker
       } from "react-google-maps"


 // this if for max size (lng -1.1855) zoom 15.2. when reduced, take zoom to 14.8, adjust lng (-1.19) increase % on smaller screens

const MyMapComponent = withScriptjs(
  withGoogleMap((props) =>
  <GoogleMap defaultZoom={15.2} defaultCenter={{lat: 50.853673, lng: -1.1855}}>
    {props.isMarkerShown &&
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    }
  </GoogleMap>
))








export default class Map extends Component {
  render () {
    return (<MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAKWNbLQsSKzpiC-JHL86FKXVM5EMwVUwE"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
)
  }
}
