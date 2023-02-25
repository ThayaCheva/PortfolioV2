import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Card(props) {
    return (
        <div className={`card reveal ${props.className}`}>
          <div className='left-container'>
            <img src={props.img}></img>
          </div>
          <div className="right-container">
            <div className="card-info">
              <div className="card-title">
                <div className="bullet"></div>
                <h2>{props.title}</h2>
              </div>
                <h3 className="time">{props.time}</h3>
                <p>JobTrack allows you to keep track of your applications while job hunting. For each job you can view its details, keep a checklist and upload related files (e.g. resumes). You can also add your interviews to a calendar. The application is built with Laravel.</p>
              <button className="btn code-btn"><FontAwesomeIcon icon={faGithub} className="code-icon"/><h4>Code</h4></button>
            </div>
          </div>
        </div>
    )
}
