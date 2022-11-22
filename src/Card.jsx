import React from 'react'


export default function Card(props) {
    return (
        <div className='card'>
            
            
            <p>{props.item.location}</p>
            <p>{props.item.googleMapsUrl}</p>
            <h3>{props.item.title}</h3>
            <span>{props.item.startDate} - {props.item.startDate}</span>
            <p>{props.item.description}</p>
        </div>
    )
}