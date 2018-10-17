import React, { Component } from "react"
import {
         withScriptjs,
         withGoogleMap,
         GoogleMap,
         Marker,
         // InfoWindow
       } from "react-google-maps"
// import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox"



 // this if for max size (lng -1.1855) zoom 15.2. when reduced, take zoom to 14.8, adjust lng (-1.19) increase % on smaller screens

const MyMapComponent = withScriptjs(
  withGoogleMap((props) =>
  <GoogleMap
      defaultZoom={15.2}
      defaultCenter={{lat: 50.853673, lng: -1.193}}
      defaultOptions={{ styles: [
          {
              "featureType": "administrative",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"

                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#12608d"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          }
      ] }} >

      <Marker   label="1" title="St. Jude Primary School" position={{lat: 50.851267, lng: -1.2010895}} onClick={(event) => console.log("St. Jude Primary School")} />
      <Marker   label="2" title="Sacred Heart Church"     position={{lat: 50.851218, lng: -1.178828}} onClick={(event) => console.log("Sacred Heart Church")} />
      <Marker   label="3" title="Fareham Public Library"  position={{lat: 50.853946, lng: -1.177275 }} onClick={(event) => console.log("Fareham Public Library")} />
      <Marker   label="4" title="Fareham Train Station"   position={{lat: 50.852934, lng: -1.191898 }} onClick={(event) => console.log("Fareham Train Station")} />
      <Marker   label="5" title="Fareham Leisure Centre"  position={{lat: 50.8574, lng: -1.1849 }} onClick={(event) => console.log("Fareham Leisure Centre")} />}

  </GoogleMap>
))

/*********************************Start of Component***************************/

export default class Map extends Component {

/********************************Render Method*********************************/

  render () {
    return (
      <div>
        <MyMapComponent
        places={this.props.places}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAKWNbLQsSKzpiC-JHL86FKXVM5EMwVUwE"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `720px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
      </div>

)
  }
}
