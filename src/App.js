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
            <div className="sun-container">
              <img className="shrine" src={require("./images/shrine.png")}></img>
            </div>
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
