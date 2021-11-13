import React from 'react'
import '../style/Appbar.css'

function Appbar(props) {
    return (
        <div className="appbar-container">
            <div className="appbar-left">
                <h5>Imaginarius</h5>
                {/* <img src="" alt="logo" /> */}
            </div>
            <div className="appbar-right">
                <a className="appbar-link">Daily</a>
                <a className="appbar-link">New</a>
                <img />
            </div>
        </div>
    )
}

export default Appbar