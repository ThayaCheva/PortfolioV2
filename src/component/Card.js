import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <div className="left-container">
              <div className="card-info">
                <div className="card-title">
                  <div className="bullet"></div>
                  <h2>{props.title}</h2>
                  <h3 className="time">{props.time}</h3>
                </div>
                <p>{props.info}</p>
              </div>
            </div>
            <div className='right-container'>
              <img src={props.img}></img>
            </div>
          </div>
    )
}
