import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <footer>
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
                        <div className="icon"><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className="icon"><FontAwesomeIcon icon={faDiscord} /></div>
                        <div className="icon"><FontAwesomeIcon icon={faGithub} /></div>
                        <div className="icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                    </div>
                    <h3>Thaya Chevaphatrakul © 2023</h3>
                </div>
            </div>
      </footer>
    )
}