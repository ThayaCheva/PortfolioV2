import React from 'react'
import Card from './Card.js'
import './css/Projects.css'

export default function Projects() {
  const cards = [
    {
      id: "1",
      title:"Tenzi Game",
      time:"2022-2023",
      img:require("../img/Tenzi.JPG"),
      link:"https://github.com/ThayaCheva/React-Practice/tree/main/tenzies"
    },
    {
      id: "2",
      title:"Shadow Pirate",
      time:"2022",
      img:require("../img/shadow.JPG"),
      link:"https://github.com/ThayaCheva/ShadowPirate"
    },
    {
      id: "3",
      title:"Front-End Development",
      time:"2018-2019",
      img:require("../img/proj3.PNG"),
      link:"https://github.com/ThayaCheva/Web-Development/tree/master/Made%20In%20Abyss%20Website_2"
    },
    {
      id: "4",
      title:"Hackthon Project", 
      time:"2022", 
      img:require("../img/port2.jpg"),
      link:"https://github.com/ThayaCheva/Star-Wars-Final"
    }
  ]

  const cardElements = cards.map(card => 
    <Card
      title={card.title}
      time={card.time}
      img={card.img}
      link={card.link}
    />
  )

    return (
      <section id="projects" className="reveal">
        <div className="projects-container">
          <div className="section-header">
            <div className="bullet"></div>
            <h1>My <span className="highlight">Projects </span></h1>
          </div>
          <div className="cards-container">
            {cardElements}
          </div>
        </div>
      </section>
    )
}