import React from 'react'
import Card from './Card.js'
import './css/Projects.css'

export default function Projects() {
  const cards = [
    {
      id: "3",
      title:"Front-End Development",
      time:"2018-2019",
      img:require("../img/proj3.PNG"),
      link:"https://github.com/ThayaCheva/Web-Development/tree/master/Made%20In%20Abyss%20Website_2",
      desc:"This is a Front-End Development project made for my EPQ project as part of my A-levels. The website is based on the show Made In Abyss and functions as some-what of a guide."
    },
    {
      id: "1",
      title:"Tenzi Game",
      time:"2022-2023",
      img:require("../img/Tenzi.JPG"),
      link:"https://github.com/ThayaCheva/React-Practice/tree/main/tenzies",
      desc:"Tenzi is game where the goal is roll 10 dices until all the dices face are the same. The game is made using React and as part of my React practice project."
    },
    {
      id: "2",
      title:"Shadow Pirate",
      time:"2022",
      img:require("../img/shadow.JPG"),
      link:"https://github.com/ThayaCheva/ShadowPirate",
      desc:"Shadow Pirate is top-down game made using Java and the Bagel library. This game is made as a project for Object Oriented Software Development (SWEN20003). The game consists of 2 stages and the goal is to reach the treasure chest at the end of stage 2. The game has 2 types of enemies that can shoot projectiles at the enemy and the player can melee attack."
    },
    {
      id: "4",
      title:"Hackthon Project", 
      time:"2022", 
      img:require("../img/port2.jpg"),
      link:"https://github.com/ThayaCheva/Star-Wars-Final",
      desc:"A game made using Java and the Bagel library as part of the Catalyst 2022 Hackathon. The game is made in 24 hours."
    }
  ]

  const cardElements = cards.map(card => 
    <Card
      title={card.title}
      time={card.time}
      img={card.img}
      link={card.link}
      desc={card.desc}
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