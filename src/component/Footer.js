import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './css/Footer.css'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="contact">
                    <div className="contact-container">
                        <p><FontAwesomeIcon icon={faPhone} />   : 0480-320-112</p>
                        <p><FontAwesomeIcon icon={faEnvelope} />   : thayajjj@gmail.com</p>
                        <p><FontAwesomeIcon icon={faHouse} />   : 568 Collins Street, Melbourne, VIC</p>
                    </div>
                </div>
                <div className="media">
                    <div className="icons">
                        <a href="https://www.facebook.com/thaya.1564156451/" target="_blank" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://github.com/ThayaCheva" target="_blank" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/thaya-chevaphatrakul-812149267/" target="_blank" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <h3>Thaya Chevaphatrakul © 2023</h3>
                </div>
            </div>
      </footer>
    )
}