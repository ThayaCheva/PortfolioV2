import React from 'react'
import './css/Main.css'
import PDF from '../files/Thaya_IT_CV.pdf'

export default function Main() {
    const words = [
        "A Web Developer & Tech Enthusiast.", 
        "Welcome to my Portfolio!",
        "This page is made with React."
    ]
    const [word, setWord] = React.useState(words[0])
    const [time, setTime] = React.useState(0)
    const [fade, setFade] = React.useState({opacity: 0,
        transition: 'all 1s ease-in-out'})
    
    React.useEffect(() => {
        setTimeout(() => setTime(time + 1), 1000)
        if (time >= 1 && time < 4) {
            setFade(prevStyle => ({...prevStyle, opacity: 1}))
            setWord(words[0])
        } 
        else if (time === 4) {
            setFade(prevStyle => ({...prevStyle, opacity: 0}))
        }
        else if (time >= 4 && time < 8) {
            setFade(prevStyle => ({...prevStyle, opacity: 1}))
            setWord(words[1])
        }
        else if (time === 8) {
            setFade(prevStyle => ({...prevStyle, opacity: 0}))
        }
        else if (time >= 8 && time < 12) {
            setFade(prevStyle => ({...prevStyle, opacity: 1}))
            setWord(words[2])
        }
        else if (time >= 12) {
            setFade(prevStyle => ({...prevStyle, opacity: 0}))
            setTime(0)
        }
    }, [time])

    return (
        <section id="main">
            <div className="main-container">
            <div className="frame">
                <img alt="profile" src={require("../img/port1.jpg")}></img>
            </div>
                <div className="intro">
                    <h1 className='name'>Hi, <span className="highlight">I'm Thaya Chevaphatrakul</span></h1>
                    <p className="tagline" style={fade}>{`<>${word}</>`}</p>
                    <a href={PDF} target="_blank"className="mainBtn"><h4>My Resume</h4></a>
                </div>
            </div>
        </section>
    )
}