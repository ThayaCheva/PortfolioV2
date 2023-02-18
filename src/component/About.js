import React from 'react'
import Education from './Education.js'
export default function About() {
    return (
        <section className="about">
        <div className="about-container">
          <div className="left-container">
            <div className="about-me">
                <div className="section-header">
                  <div className="bullet"></div>
                  <h1>About <span className="highlight">Me</span></h1>
                </div>
                <p>A diligent computing and software system
                  undergraduate, experienced with using computer hardware and software. With my commitment and high aptitude to learn, I’m currently seeking a place within the field that works with computers and software to gain experience and improve my skill.
                </p>
            </div>
          </div>
          <div className="right-container">
            <Education 
                name={"BANGKOK PREP"} 
                date={"2018-2020"}
                info={"A diligent computing and software system undergraduate, experienced with using computer hardware and software. With my commitment and high aptitude to learn, I’m currently seeking a place within the field that works with computers"}
            />
            <Education 
                name={"UNIVERSITY OF MELBOURNE"} 
                date={"2020-CURR"}
                info={"A diligent computing and software system undergraduate, experienced with using computer hardware and software. With my commitment and high aptitude to learn, I’m currently seeking a place within the field that works with computers"}
            />
          </div>
        </div>
      </section> 
    )
}