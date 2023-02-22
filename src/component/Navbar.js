import React from 'react'
import './css/Navbar.css'
export default function Navbar() {
    return (
        <nav id="navbar">
            <ul>
                <a href="#home" className="home-nav">HOME</a>
                <a href="#about" className="nav-item">ABOUT</a>
                <a href="#projects" className="nav-item">WORK</a>
                <a href="#footer" className="nav-item">CONTACT</a>
            </ul>
        </nav>
    )
}