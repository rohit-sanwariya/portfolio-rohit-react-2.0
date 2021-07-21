import React from 'react'
import oneProject from '../img/project-one.png'
import twoProject from '../img/project-two.png'
import threeProject from '../img/project-three.png'
import Navbar from './Navbar'

const Projects = () => {





    return (<>
        <Navbar />

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active project-card">
                    <p><span>Apani Dukaan:</span>
                        <br />
                        An Eccommerce Website
                    </p>
                    <img class="d-block w-100" src={oneProject} alt="First slide" />
                </div>
                <div class="carousel-item project-card">
                    <p><span>Box Office App:</span>  <br />
                        Uses Tv</p>
                    <img class="d-block w-100" src={twoProject} alt="Second slide" />
                </div>
                <div class="carousel-item project-card">
                    <p><span>Tic Tac Toe:</span>  <br />
                        A Simple X and O Game</p>
                    <img class="d-block w-100" src={threeProject} alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only span-left">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span  class="sr-only span-right">Next</span>
            </a>
        </div>
    </>
    )
}

export default Projects
