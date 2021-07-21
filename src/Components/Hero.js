import React from 'react'
import Work from '../img/work-illustrations.png'
const Hero = () => {
    return (<>
    <main className="hero">
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
             <a className="send-email" href="mailto:rohitsanwariya1995@gmail.com">
                 Send Me An Email
             </a>
         </div>
        </div>
        <div className="card">
             <img src={Work} alt="" className="work-ilustration" />
                   </div>
       
     </main>
     </>
        

    )
}

export default Hero;
