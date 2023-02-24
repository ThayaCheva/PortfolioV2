import React from 'react'
import Card from './Card.js'
import './css/Projects.css'

export default function Projects() {
    const [direction, setDirection] = React.useState("left") 
    const arrowLeft = {
      color: direction === "left" ? "#333" : ""
    }
    const arrowRight = {
      color: direction === "right" ? "#333" : ""
    }
    function handleLeft() {
      document.getElementById("card-id").style.transform = "translateX(0px)"
      document.getElementById("card-id").style.transition = "all 0.7s ease-in-out"
      if (direction === "right") {
        setDirection("left")
      }
    }
    
    function handleRight() {
      document.getElementById("card-id").style.transform = "translateX(-320px)"
      document.getElementById("card-id").style.transition = "all 0.7s ease-in-out"
      if (direction === "left") {
        setDirection("right")
      }
    }

    return (
      <section id="projects" className="reveal">
        <div className="projects-container">
          <div className="section-header">
            <div className="bullet"></div>
            <h1>My <span className="highlight">Projects </span></h1>
          </div>
          <div className="slide-container">
            <div className="arrow" style={arrowLeft} onClick={() => handleLeft()}>{`<`}</div>
            <div className="cards">
              <div id="card-id" className="card-container">
                <Card 
                  title={"Tenzi"} 
                  time={"2022-2023"} 
                  img={require("../img/Tenzi.JPG")}
                  link={"https://github.com/ThayaCheva/React-Practice/tree/main/tenzies"}
                  />
                <Card 
                  title={"Shadow Pirate"} 
                  time={"2022-2022"} 
                  img={require("../img/shadow.JPG")}
                  link={"https://github.com/ThayaCheva/ShadowPirate"}
                  />
                <Card 
                  title={"Front-End Development"} 
                  time={"2018-2019"} 
                  img={require("../img/proj3.PNG")}
                  link={"https://github.com/ThayaCheva/Web-Development/tree/master/Made%20In%20Abyss%20Website_2"}
                  />
                <Card 
                  title={"Hackthon Project"} 
                  time={"2022-2022"} 
                  img={require("../img/port2.jpg")}
                  link={"https://github.com/ThayaCheva/Star-Wars-Final"}
                  />
              </div>
            </div>
            <div className="arrow" style={arrowRight} onClick={() => handleRight()}>{`>`}</div>
          </div>
        </div>
      </section>
    )
}