import React from 'react'

import Navbar from './component/Navbar.js'
import Main from './component/Main.js'
import About from './component/About.js'
import Projects from './component/Projects.js'
import Footer from './component/Footer.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <div className="linebreak">
        <div className="line"></div>
      </div>
      <Projects/>
      <div className="linebreak">
        <div className="line"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
