import Navbar from './Navbar.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Footer from './Footer.js'


function App() {
  return (
    <div>
      <Navbar/>
      <div className="landing">
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
