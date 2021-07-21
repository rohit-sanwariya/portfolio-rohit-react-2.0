import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navRef = useRef()
    const hamburgerRef = useRef()
    const [showMenu, setshowMenu] = useState(false)
    const getDim = () =>{
        const { innerWidth: width, innerHeight: height } = window;
        return { innerWidth: width, innerHeight: height }
    }
  
    const [dim, setdim] = useState(getDim())
    
    useEffect(() => {
        window.addEventListener('resize',()=>{
            setdim(getDim())
        })


        hamburgerRef.current.addEventListener('click',()=>{
            console.log("click");
            if (!showMenu) {
                setshowMenu(true)
                clearTimeout()
                navRef.current.style.display = "grid";
                navRef.current.style.animation = "drawer 2s  forwards";
                
              
                
              } else  {
               
                navRef.current.style.animation = "drawerClose 2s  forwards "
               
                setTimeout(() => {
                    navRef.current.style.display = "none";
                    setshowMenu(false)
                }, 1800);
              }
        }
        )
        
       
      }, [showMenu]);





    return (
        <div>
            <nav>
                <div ref={hamburgerRef} className="hamburger">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <ul ref={navRef} className="nav-container">
                    <li className="nav-item">
                        <Link to="/" className={dim.innerWidth<768?"nav-link link-1":"nav-link link-1 rohit-text"}>
                           {dim.innerWidth<768?"Home":"Rohit"}
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

export default Navbar
