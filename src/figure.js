import React from 'react'
import './index.css'

const figure = ({name}) => {

  return (

         <div>
            <br />
            <figure>
            <img src={this.props.place.photo} alt={this.props.place.title} />
            <figcaption>Taken by: {this.props.place.attribution}</figcaption>
            </figure>
          </div>
)}

export default figure
