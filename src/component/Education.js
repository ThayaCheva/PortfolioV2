import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSuitcase } from '@fortawesome/free-solid-svg-icons'


export default function Education(props) {
    return (
        <div className="education">
            <div className="divider">
            <div className="icon"><FontAwesomeIcon icon={faSuitcase} /></div>
            <div className="line"></div>
            </div>
            <div className="education-container">
            <div className="education-heading">
                <h2 className="school">{props.name}</h2>
                <h3 className="time">{props.date}</h3>
            </div>
            <p>
                {props.info}
            </p>
            </div>
        </div>
    )
}