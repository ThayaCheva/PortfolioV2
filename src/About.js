import React from 'react'
import "./styling/about.css"
import PDF from './files/thaya-resume.pdf'

export default function About(props) {
    return (
        <section id="about" onMouseMoveCapture={props.hoverFunction}>
            <div className="about-container">
                <div className="header">
                    <h1>ABOUT ME</h1>
                </div>
                <p>Hi! I'm a Computing and Software Systems student at the University of Melbourne from Thailand. I possess a strong passion for graphic design and front-end development. I've also developed various software projects ranging from games to websites. Check out my projects and feel free to get in touch for collaboration opportunities. </p>
                <a href={PDF} target="_blank" className="btn-1">MY RESUME</a>
            </div>
        </section>
    )
}