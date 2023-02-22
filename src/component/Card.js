import React from 'react'

export default function Card(props) {
    return (
        <a href={props.link} target="_blank" className="card reveal">
          <div className='right-container'>
            <img src={props.img}></img>
          </div>
          <div className="shape"></div>
          <div className="left-container">
            <div className="card-info">
              <div className="card-title">
                <h2>{props.title}</h2>
                <h3 className="time">{props.time}</h3>
              </div>
            </div>
          </div>
        </a>
    )
}
