import React from 'react'
import { Outlet, Link, Router } from "react-router-dom";
import '../style/Appbar.css'

function Appbar(props) {
    return (
        <div className="appbar-container">
            <div className="appbar-left">
                <Link to="/" style={{ textDecoration: "none", color: 'whitesmoke', fontSize: '1.4rem', fontWeight: 'bolder' }}>Imaginarium</Link>
            </div>
            <div className="appbar-right">
                <Link to="/" className="appbar-link">Home</Link>
                <Link to="/create" className="appbar-link">Create</Link>
                <a className="appbar-link" href="https://github.com/imaginaryguys">About</a>
            </div>
        </div>
    )
}

export default Appbar