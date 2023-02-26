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
                <p>{props.desc}</p>
              <button className="btn code-btn"><FontAwesomeIcon icon={faGithub} className="code-icon"/><h4>Code</h4></button>
            </div>
          </div>
        </div>
    )
}
