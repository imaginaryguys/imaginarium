import React from 'react'
import '../style/Card.css'

function Card(props) {
    return (
        <div className="card-container">
            <img className="card-img" src={props.img} />
            <div className="card-text-container">
                <h3 className="card-heading">{props.headline}</h3>
                <div className="card-properties">
                    <h5>Used filter: {props.filterName}</h5>
                    <h5>Author: <a className="card-author" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{props.authorName}</a></h5>
                </div>
                <p className="card-date">{props.date}</p>
            </div>
        </div>
    )
}

export default Card
