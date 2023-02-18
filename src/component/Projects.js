import React from 'react'
import Card from './Card.js'
export default function Projects() {
    return (
        <section className="projects">
        <div className="projects-container">
          <div className="section-header">
            <div className="bullet"></div>
            <h1>My <span className="highlight">Projects </span></h1>
          </div>
          <Card 
            title={"Project 1"} 
            time={"2022-CURR"} 
            info={"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
            img={require("../img/port1.jpg")}
            />
          <Card 
            title={"Project 2"} 
            time={"2022-CURR"} 
            info={"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
            img={require("../img/port2.jpg")}
            />
          <Card 
            title={"Project 3"} 
            time={"2022-CURR"} 
            info={"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
            img={require("../img/port3.jpg")}
            />
        </div>
      </section>
    )
}