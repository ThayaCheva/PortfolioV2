import Navbar from './Navbar.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Footer from './Footer.js'
import React from 'react'

function App() {
  const [parallaxPosition, setParallaxPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2);
    const y = (e.clientY - window.innerHeight / 2);
    setParallaxPosition({ x, y });
  };

  return (
    <div>
      <Navbar/>
      <div className="landing" onMouseMoveCapture={handleMouseMove}>
        <div className="clouds">
          <img className="cloud-object cloud-1" style={{
          transform: `translate(${parallaxPosition.x * 0.03}px, ${parallaxPosition.y  * -0.01}px)`,
        }} src={require("./images/cloud1.png")}/>
          <img className="cloud-object cloud-2" style={{
          transform: `translate(${parallaxPosition.x  * 0.04}px, ${parallaxPosition.y  * 0.04}px)`,
        }} src={require("./images/cloud2.png")}/>
          <img className="cloud-object cloud-3" style={{
          transform: `translate(${parallaxPosition.x * -0.02}px, ${parallaxPosition.y * -0.02}px)`,
        }} src={require("./images/cloud3.png")}/>
        </div>
        <div className="art">
          <div className="art-container">
            <img className="background" src={require("./images/wave-style-jap.jpg")} alt="cloud"></img>
            <div className="sun-container"></div>
            <img className="cloud-grey" style={{
            transform: `translate(${parallaxPosition.x * 0.01}px, ${parallaxPosition.y * -0.01}px)`,
            }}  src={require("./images/cloud-grey.png")} alt="cloud-grey"></img>
            <img className="cloud-white" src={require("./images/cloud-white.png")} alt="cloud-white"></img>
          </div>
        </div>
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
