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

      <Marker  title="St. Jude Primary School"     position={{lat: 50.851218, lng: -1.178828}} />
      <Marker   title="Sacred Heart Church"    position={{lat: 50.851267, lng: -1.2010895}} />
      <Marker   title="Fareham Public Library"    position={{lat: 50.853946, lng: -1.177275 }} />
      <Marker   title="Fareham Train Station"    position={{lat: 50.852934, lng: -1.191898 }} />
      <Marker   title="Fareham Leisure Centre"    position={{lat: 50.8574, lng: -1.1849 }} />


  </GoogleMap>
))








export default class Map extends Component {
  render () {
    return (<MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAKWNbLQsSKzpiC-JHL86FKXVM5EMwVUwE"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `725px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
)
  }
}
