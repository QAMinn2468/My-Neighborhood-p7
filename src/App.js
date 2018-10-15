import React, { Component } from 'react';
import './index.css';
import Map from './map.js'
import Banner from './banner.js'
import Sidebar from './sidebar.js'


const request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/6k8i0', true);
request.onload = function () {

  // Begin accessing JSON data here
  const placesArray = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(placesArray);


  } else {
    const errorMessage = document.createElement('alert');
    errorMessage.textContent = `There was an error.`;
    console.log(alert);
  }
}

request.send();

/*********************************Start of Component***************************/

class App extends Component {
  state = {
    places: [
    {
          position: {lat: 50.851267, lng: -1.2010895},
          title: 'St. Jude Primary School',
          website: 'http://www.st-judes.hants.sch.uk/',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/St._Jude%27s_School_-_Fareham_-_geograph.org.uk_-_863172.jpg',
          attribution: 'Colin Babb, St. Jude School, Fareham',
          isMarkerShown: true
        },
        {
          position: {lat: 50.851218, lng: -1.178828},
          title: 'Sacred Heart Church',
          website: 'http://www.catholicchurchfareham.org.uk/',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Church_of_the_Sacred_Heart%28R.C%29_-_geograph.org.uk_-_616710.jpg',
          attribution: 'Basher Eyre, Church of the Sacred Heart(R.C)',
          isMarkerShown: true
        },
        {
           position: {lat: 50.853946, lng: -1.177275 },
           title: 'Fareham Public Library',
           website: 'https://www.facebook.com/FarehamLibrary/',
           photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Fareham_Library_-_geograph.org.uk_-_616696.jpg',
           attribution: 'Basher Eyre, Fareham Library',
           isMarkerShown: true
         },
         {
           position: {lat: 50.852934, lng: -1.191898 },
           title: 'Fareham Train Station',
           website: 'http://www.nationalrail.co.uk/stations/frm/details.aspx',
           photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Entrance_to_Fareham_station_-_geograph.org.uk_-_615988.jpg',
           attribution: 'Basher Eyre, Entrance to Fareham station',
           isMarkerShown: true
         },
         {
           position: {lat: 50.8574, lng: -1.1849 },
           title: 'Fareham Leisure Centre',
           website: 'https://www.everyoneactive.com/centre/Fareham-Leisure-Centre/?utm_source=Web&utm_medium=GoogleBusiness&utm_campaign=Local',
           photo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Leisure_Centre-Fareham_-_geograph.org.uk_-_734794.jpg',
           attribution: 'Colin Babb, Leisure Centre-Fareham',
           isMarkerShown: true
         }
       ]
  }
/********************************Render Method*********************************/

  render() {
    return (
      <div className="App">
        <Banner />
        <Sidebar places={this.state.places} />
        <Map places={this.state.places} />
      </div>
    );
  }
}

export default App;
