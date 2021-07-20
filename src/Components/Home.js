import React from 'react'
import '../App.scss'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <div className="logo">
                <a href="/" className="logo-text"> Rohit</a>
            </div>
            <Navbar/>
        </div>
    )
}

export default Home
