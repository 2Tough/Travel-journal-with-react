import React from 'react'
import marker from "../images/marker.png"

export default function Card(props) {
    return (
<div className='card'>
            
            <img src={props.item.imageUrl} className="card--image"></img>
            
            <div className="card--main">
                <div className="card--top">
                <img src={marker} className="card--top--img"></img>
                    <p >{props.item.location}</p>
                    <a href="blank" src="{props.item.googleMapsUrl}">View on Google Maps</a>
                </div>
                <div className="card--middle">
                    <h3>{props.item.title}</h3>
                    <span className="card--middle--date">{props.item.startDate} - {props.item.startDate}</span>
                    <p>{props.item.description}</p>
                    
                </div>
            </div>
        </div>
    )
}