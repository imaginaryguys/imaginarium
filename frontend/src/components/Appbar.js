import React from 'react'
import '../style/Appbar.css'
import userImg from '../images/user.png'

function Appbar(props) {
    return (
        <div className="appbar-container">
            <div className="appbar-left">
                <h5>Imaginarium</h5>
            </div>
            <div className="appbar-right">
                <a className="appbar-link">Daily</a>
                <a className="appbar-link">Recomendation</a>
                <a className="appbar-link">Create</a>
                <img src={userImg} />
            </div>
        </div>
    )
}

export default Appbar