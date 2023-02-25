import React from 'react'
import "./css/Skills.css"

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="section-header">
                <div className="bullet"></div>
                <h1>My <span className="highlight">Skills </span></h1>
            </div>
            <div className="skills-container reveal">
                <div className="grid-item">
                    <div className="skill-icon">
                        <img className="front" alt="logo" src={require("../img/html-logo.png")}/>
                        <div className="back"><h3>HTML5</h3></div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="skill-icon">
                        <img className="front" alt="logo" src={require("../img/css-logo.png")}/>
                        <div className="back"><h3>CSS3</h3></div>  
                    </div>
                </div>

                <div className="grid-item">
                    <div className="skill-icon">
                        <img className="front" alt="logo" src={require("../img/react-logo.png")}/>
                        <div className="back"><h3>REACT</h3></div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="skill-icon">
                        <img className="front" alt="logo" src={require("../img/javascript-logo.png")}/>
                        <div className="back"><h3>JAVASCRIPT</h3></div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="skill-icon">
                        <img className="front" alt="logo" src={require("../img/python-logo.png")}/>
                        <div className="back"><h3>PYTHON</h3></div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="skill-icon">
                        <img className="front" alt="logo" src={require("../img/java-logo.png")}/>
                        <div className="back"><h3>JAVA</h3></div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="skill-icon">
                        <img className="front" alt="logo" src={require("../img/c-logo.png")}/>
                        <div className="back"><h3>C</h3></div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="skill-icon">
                        <img className="front" alt="logo" src={require("../img/mysql-logo.png")}/>
                        <div className="back"><h3>MYSQL</h3></div>
                    </div>
                </div>
            </div>
        </section>
    )
}