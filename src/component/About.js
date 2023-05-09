import React from 'react'
import Education from './Education.js'
import './css/About.css'


export default function About() {
  const [toggle, setToggle] = React.useState(false)

  function HandleClick() {
    setToggle(toggle => !toggle)
  }

  return (
      <section id="about">
        <div className="about-container">
          <div className="left-container reveal">
            <div className={`about-me ${toggle ? "about-show" : ""}`} onClick={() => HandleClick()}>
                <div className="section-header">
                  <div className="bullet"></div>
                  <h1>About <span className="highlight">Me</span></h1>
                </div>
                <p className={`click-me ${toggle ? "hide" : ""}`}>{`<>Click Me</>`}</p>
                <p className={`${toggle ? "" : "hide"}`}>A diligent third-year undergraduate pursuing a Bachelor of Science degree and majoring in Computing and Software System as well as possessing a diverse skill set in both computer hardware and software.
                </p>
            </div>
          </div>
          <div className="right-container reveal">
            <Education 
                name={"UNIVERSITY OF MELBOURNE"} 
                date={"2021-CURR"}
                info={"<>Enrolled in the University of Melbourne, majoring in Computing and Software Systems. During my time at University I've participated in Hackathons and other activites.I'm currently in my third year with a current WAM of 73.538</>"}
            />
            <Education 
                name={"BANGKOK PREP"} 
                date={"2018-2020"}
                info={"<>Attended Bangkok International Preparatory & Secodary School in Thailand and completed the A levels there. During this time, I've created the front-end for a website as my EPQ projects and participated in several communty services and activities</>"}
            />
          </div>
        </div>
      </section> 

    )
}