import React from 'react'
import oneProject from '../img/project-one.png'
import twoProject from '../img/project-two.png'
import threeProject from '../img/project-three.png'

const Projects = () => {





    return (<>
    
            <h1 style={{textJustify:"center",textAlign:"center",margin:"0.5rem"}}>My Projects</h1>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active project-card">
                    <p><span>Apani Dukaan:</span>
                        <br />
                        An Eccommerce Website
                    </p>
                    <img className="d-block w-100" src={oneProject} alt="First slide" />
                </div>
                <div className="carousel-item project-card">
                    <p><span>Box Office App:</span>  <br />
                        Search Tv Shows and Movies</p>
                    <img className="d-block w-100" src={twoProject} alt="Second slide" />
                </div>
                <div className="carousel-item project-card">
                    <p><span>Tic Tac Toe:</span>  <br />
                        A Simple X and O Game</p>
                    <img className="d-block w-100" src={threeProject} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only span-left">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span  className="sr-only span-right">Next</span>
            </a>
        </div>
    </>
    )
}

export default Projects
