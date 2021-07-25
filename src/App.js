import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { lazy, Suspense } from 'react';

import './App.css'
import './App.scss'

const Home = lazy(() => import('./Components/Home'))
const Projects = lazy(() => import('./Components/Projects'))
const Skills = lazy(() => import('./Components/Skills'))
const About = lazy(() => import('./Components/About'))
const Navbar = lazy(() => import('./Components/Navbar'))


function App() {



       const renderLoader = () => <p>Loading</p>;

       return <Suspense fallback={renderLoader()}>
              <BrowserRouter>
                     <div className="container">

                            <div className="logo">
                                   <a href="/" className="logo-text"> Rohit</a>
                            </div>
                            <Navbar />

                            <Switch>
                                   <Route exact path="/" >
                                          <Home />
                                   </Route>
                                   <Route exact path="/projects" >
                                          <Projects />
                                   </Route>
                                   <Route exact path="/skills" >
                                          <Skills />
                                   </Route>
                                   <Route exactpath="/about" >
                                          <About />
                                   </Route>
                            </Switch>

                     </div>

              </BrowserRouter>
       </Suspense>


}

export default App;
