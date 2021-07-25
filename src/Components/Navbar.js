
import React, { memo } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const getDim = useCallback(() => {
        return window.innerWidth;
    }, [])

    const [dim, setdim] = useState(getDim())

    useEffect(() => {
        window.addEventListener('resize', () => {
            setdim(getDim())
        })
    }, [getDim]);

    return (
        <div>
            <nav>
                <input type="checkbox" name="s" id="s" />
                <label htmlFor="s"></label>
                <div className="hamburger">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <ul className="nav-container">
                    <li className="nav-item">
                        <Link to="/" className={dim < 1024 ? "nav-link link-1" : "nav-link link-1 rohit-text"}>
                            {dim < 1024 ? "Home" : "Rohit"}
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link link-2">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-link link-3">
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link link-4">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default memo(Navbar)
