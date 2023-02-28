import React from 'react'
import Card from './Card.js'
import './css/Projects.css'

export default function Projects() {
  const cards = [
    {
      title:"Front-End Development",
      time:"2018-2019",
      img:require("../img/proj3.PNG"),
      link:"https://github.com/ThayaCheva/Web-Development/tree/master/Made%20In%20Abyss%20Website_2",
      desc:`This is a Front-End Development project made as my A level's EPQ. The website is based on the show "Made In Abyss" and functions as some-what of a guide. This project is created using HTML and CSS.Furthermore, the page is also responsive to mobile devices.`
    },
    {
      title:"Shadow Pirate",
      time:"2022",
      img:require("../img/shadow.JPG"),
      link:"https://github.com/ThayaCheva/ShadowPirate",
      desc:"Shadow Pirate is top-down game made using Java and the Bagel library. This game is made as a project for Object Oriented Software Development (SWEN20003). This project demonstrates my ability to understand Object Oriented Programming."
    },
    {
      title:"Tenzi Game",
      time:"2022-2023",
      img:require("../img/Tenzi.JPG"),
      link:"https://github.com/ThayaCheva/React-Practice/tree/main/tenzies",
      desc:"Tenzi is game where the goal is roll 10 dices until all the dices face are the same. The game is made using HTML, CSS, JavaSript and React. The projects also utilizes hooks such as useState and useEffect."
    },
    {
      title:"Hackthon Project", 
      time:"2022", 
      img:require("../img/port2.jpg"),
      link:"https://github.com/ThayaCheva/Star-Wars-Final",
      desc:"A game similar to Galaga made using Java and the Bagel library as part of the Catalyst 2022 Hackathon."
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