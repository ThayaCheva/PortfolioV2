import Navbar from './Navbar.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Footer from './Footer.js'
import React from 'react'

function App() {
  const [parallaxPosition, setParallaxPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const moveValue = 0.05; // Adjust this value to control the intensity of the parallax effect
    const x = (e.clientX - window.innerWidth / 2) * moveValue;
    const y = (e.clientY - window.innerHeight / 2) * moveValue;
    setParallaxPosition({ x, y });
  };
  return (
    <div>
      <Navbar/>
      <div className="landing">
        <div className="clouds" onMouseMove={handleMouseMove}>
          <img className="cloud-object cloud-1" style={{
          transform: `translate(${parallaxPosition.x}px, ${parallaxPosition.y}px)`,
        }} src={require("./images/cloud1.png")}/>
          <img className="cloud-object cloud-2" src={require("./images/cloud2.png")}/>
          <img className="cloud-object cloud-3" src={require("./images/cloud3.png")}/>
        </div>
        <div className="art">
          <div className="art-container">
            <img className="background" src={require("./images/wave-style-jap.jpg")} alt="cloud"></img>
            <div className="sun-container"></div>
            <img className="cloud" src={require("./images/cloud.png")} alt="cloud"></img>
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
