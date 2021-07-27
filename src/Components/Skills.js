import React from 'react'
import javascriptImg from '../img/javascript.png'
import reactImg from '../img/react.png'
import reactRouterImg from '../img/react-router.png'
import reduxImg from '../img/redux.png'

const Skills = () => {
    return (<>
        <main className="skills-container" style={{

        }}>
            <div className="skills-card">
                <p>
                    <span>Javascript</span>
                </p>
                <img src={javascriptImg} alt="" />
            </div>
            <div className="skills-card">
                <p>
                    <span>React Js</span>
                </p>
                <img src={reactImg} alt="" />
            </div>
            <div className="skills-card">
                <p>
                    <span>React Router</span>
                </p>
                <img src={reactRouterImg} alt="" />
            </div>
            <div className="skills-card">
                <p>
                    <span>Redux : State managment</span>
                </p>
                <img src={reduxImg} alt="" />
            </div>



            

        </main>
        <div style={{width:"100%",display:"grid",justifyContent:"center",alignContent:'center',padding:"0 1rem"}}>
        <p  >&copy; Rohit Sanwariya</p>
        </div>
        
        </>
    )
}

export default Skills
