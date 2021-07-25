import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    return (
        <div className="about">
            <div className="about-heading">
                <h2>
                    About Me.
                </h2>
                <p>
                    Hello I am <span className="logo-text">Rohit Sanwariya. </span>
                    I Love to design Front End solution. When I am not busy doing that I spend my time reading tech blogs. </p>
                <p>
                    For fun I play Table Tennis and binge watch Scifi shows and movies.
                </p>
            </div>
            <p>You may also find me on....</p>
            <div className="social-container">

                <div><a href="https://www.instagram.com/rohitsanvariya?r=nametag">
                    <FontAwesomeIcon className="fontawesome"
                        icon={faInstagram} size="3x" />
                </a>
                </div>
                <div><a href="https://www.linkedin.com/in/rohit-sanwariya/">
                    <FontAwesomeIcon className="fontawesome"
                        icon={faLinkedin} size="3x" />
                </a>
                </div>
                <div> <a href="https://www.facebook.com/rohit.sanvriya">
                    <FontAwesomeIcon className="fontawesome"
                        icon={faFacebook} href="" size="3x" />     </a></div>
                <div><a href="https://twitter.com/Rsanvariya?s=08">
                    <FontAwesomeIcon className="fontawesome"
                        icon={faTwitter} size="3x" />
                </a>
                </div>


            </div>
          
        </div>

    )
}

export default About
