import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

export default function Navbar() {
    const [toggle, setToggle] = React.useState('show-menu');
    function expandMenu() {
        console.log(toggle);
        if (toggle === 'show-menu') {
            setToggle('close-menu');
        }
        else {
            setToggle('show-menu');
        }
    }
    return (
        <nav id="navbar">
            <ul className="desktop-nav">
                <a href="#home" className="logo">{`<THAYA/CHEVA>`}</a>
                <div>
                    <a href="#about" className="nav-item">ABOUT</a>
                    <a href="#skills" className="nav-item">SKILLS</a>
                    <a href="#projects" className="nav-item">PROJECTS</a>
                    <a href="#footer" className="nav-item">CONTACT</a>
                </div>
            </ul>
            <div className="mobile-nav">
                <div></div>
                <a href="#home" className="logo">{`<THAYA/CHEVA>`}</a>
                <div className="ham-menu " onClick={() => expandMenu()}>
                    {toggle === 'show-menu' && <FontAwesomeIcon className="icon" icon={faBars}/>}
                    {toggle === 'close-menu' && <FontAwesomeIcon className="icon" icon={faXmark}/>}
                </div>
            </div>
            <div className={`drop-menu ${toggle}`}>
                <ul>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#footer">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )
}