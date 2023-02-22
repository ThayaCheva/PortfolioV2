import React from 'react'

import Navbar from './component/Navbar.js'
import Main from './component/Main.js'
import About from './component/About.js'
import Projects from './component/Projects.js'
import Footer from './component/Footer.js'

function App() {
  window.addEventListener('scroll', reveal);

  function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight
      var revealtop = reveals[i].getBoundingClientRect().top
      var revealpoint = 150

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      }
      else {
        reveals[i].classList.remove('active')
      }
    }
  }
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <div className="linebreak">
        <div className="line"></div>
      </div>
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
