import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './styling/footer.css'
export default function Footer() {
    return (
        <section id="footer">
            <div className="footer-container">
                <h3> +61 0480-320-112 | thayajjj@gmail.com</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/in/thaya-chevaphatrakul-812149267/" target="_blank"><FontAwesomeIcon className="icons" icon={faLinkedinIn}/></a></li>
                    <li><a href="https://github.com/ThayaCheva" target="_blank"><FontAwesomeIcon className="icons" icon={faGithub}/></a></li>
                    <li><a href="https://www.instagram.com/jerrycheva1/" target="_blank"><FontAwesomeIcon className="icons" icon={faInstagram}/></a></li>
                </ul>
                <h3> Designed and built by Thaya Chevaphatrakul</h3>
                <img className="img-1"src={require("./images/border-wave-background.png")}/>
                <img className="img-2" src={require("./images/border-wave-background.png")}></img>
            </div>
        </section>
    )
}