import React from 'react'
import { Link } from 'react-router-dom'

const HeroText = () => {
    return (
        <div className="column-1">
        <div className="headline-container">
            <h1 className="headline">
                Looking for a Web Developer ?
            </h1>
        </div>
        <div className="subtext-container">
            <p className="subtext">
                Hello, I am a Web Developer and Programmer living in Indore.
                I Design Frontend Solutions, Usually with React.

            </p>
        </div>
        <div className="send-email-container">
            <Link className="send-email" to="/projects">
               Check My Work
            </Link>
        </div>
       </div>
    )
}

export default HeroText
