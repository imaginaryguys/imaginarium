import React from 'react'
import '../style/Card.css'

function Card(props) {
    return (
        <div className="card-container">
            <h5 className="card-heading">{props.headline}</h5>
            <img className="card-img" src={props.img} />
            <p className="card-date">{props.date}</p>
        </div>
    )
}

export default Card