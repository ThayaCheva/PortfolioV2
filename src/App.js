import Navbar from './Navbar.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Footer from './Footer.js'
import React from 'react'

function App() {
  const [parallaxPosition, setParallaxPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isApple = /iPhone|iPod|iPad/i.test(navigator.userAgent);
    if (!(isMobile || isApple)) {
      const x = (e.clientX - window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2);
      setParallaxPosition({ x, y });
    }
  };

  return (
    <div>
      <Navbar hoverFunction = {handleMouseMove}/>
      <div className="landing" onMouseMoveCapture={handleMouseMove}>
        <div className="clouds">
          <img className="cloud-object cloud-1" style={{
          transform: `translate(${parallaxPosition.x * 0.03}px, ${parallaxPosition.y  * -0.01}px)`,
        }} src={require("./images/landing-cloud1.png")}/>
          <img className="cloud-object cloud-2" style={{
          transform: `translate(${parallaxPosition.x  * 0.04}px, ${parallaxPosition.y  * 0.04}px)`,
        }} src={require("./images/landing-cloud2.png")}/>
          <img className="cloud-object cloud-3" style={{
          transform: `translate(${parallaxPosition.x * -0.02}px, ${parallaxPosition.y * -0.02}px)`,
        }} src={require("./images/landing-cloud3.png")}/>
        </div>
        <div className="tori-container">
          <img className="tori-title" src={require("./images/landing-tori-title.png")} alt="tori-title"/>
        </div>
        <div className="art">
          <div className="art-container">
            <div className="sun-container"></div>
            <img className="cloud-grey" style={{
            transform: `translate(${parallaxPosition.x * 0.01}px, ${parallaxPosition.y * -0.01}px)`,
            }}  src={require("./images/landing-cloud-grey.png")} alt="cloud-grey"></img>
            <img className="cloud-white" src={require("./images/landing-cloud-white.png")} alt="cloud-white"></img>
          </div>
        </div>
      </div>
      <About hoverFunction = {handleMouseMove}/>
      <Skills hoverFunction = {handleMouseMove}/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
