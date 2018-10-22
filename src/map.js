/*global google */
import React, { Component } from "react"
import './index.css'
import {
         withScriptjs,
         withGoogleMap,
         GoogleMap,
         Marker,
         InfoWindow
       } from "react-google-maps"

 // this if for max size (lng -1.1855) zoom 15.2. when reduced, take zoom to 14.8, adjust lng (-1.19) increase % on smaller screens

const MyMapComponent = withScriptjs(
  withGoogleMap(props =>
  <GoogleMap
      aria-label="application"
      tabIndex="0"
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

      {props.markers && props.markers
        .filter(marker => marker.isMarkerShown)
        .map((marker, index, array) => (
          <Marker
            key={ index }
            tabIndex="0"
            aria-label="application"
            title={ marker.title }
            position= { marker.position }
            animation={array.length === 1? google.maps.Animation.BOUNCE : google.maps.Animation.DROP }
            onClick={() => props.handleMarkerClick(marker) }>
              {marker.isOpen && (
                <InfoWindow
                className="info">
                  <div>
                      <p>{ marker.title }</p>
                      <br />
                      <figure>
                      <img src={marker.photo} alt={marker.title} />
                      <figcaption>Taken by: {marker.attribution}</figcaption>
                      </figure>
                  </div>
                </InfoWindow>)}

          </Marker>


      ))}

  </GoogleMap>
))

/*********************************Start of Component***************************/

export default class Map extends Component {

/********************************Render Method*********************************/

  render () {
    return (
      <div>
        <MyMapComponent
        {...this.props}
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
