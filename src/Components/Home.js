
import '../App.scss'
import workImage from '../img/work-illustrations.png'

const Home = () => {
   


    return (
        <div>
           
            <main class="hero">
           <div class="column-1">
            <div class="headline-container">
                <h1 class="headline">
                    Looking for a Web Developer ?
                </h1>
            </div>
            <div class="subtext-container">
                <p class="subtext">
                    Hello, I am a Web Developer and Programmer living in Indore.
                    I Design Frontend Solutions, Usually with React.

                </p>
            </div>
            <div class="send-email-container">
                <a class="send-email" href="/projects">
                   Check My Work
                </a>
            </div>
           </div>
            <div class="card">
                <img src={workImage} alt="" class="work-ilustration" />
            </div>
        </main>
        </div>
    )
}

export default Home
