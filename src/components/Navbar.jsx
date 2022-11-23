import React from "react"
import earth from "../images/earth.png"


export default function Navbar() {   
    return (
        <nav className="navbar">
            <img src={earth}></img>
            <h3>My travel journal</h3>
        </nav>
    )
}