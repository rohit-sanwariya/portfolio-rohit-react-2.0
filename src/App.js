import { Route, Switch,HashRouter, Link} from 'react-router-dom'
import { lazy, Suspense } from 'react';

import './App.css'
import './App.scss'

const Home = lazy(() => import('./Components/Home'))
const Projects = lazy(() => import('./Components/Projects'))
const Skills = lazy(() => import('./Components/Skills'))
const About = lazy(() => import('./Components/About'))
const Navbar = lazy(() => import('./Components/Navbar'))


function App() {



       const renderLoader = () => <div className="spinner-grow" role="status">
       <span className="sr-only">Loading...</span>
     </div>

       return <HashRouter>
                     <Suspense fallback={renderLoader()}>
                     <div className="container">

                            <div className="logo">
                                   <Link to="/" className="logo-text"> Rohit</Link>
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
                     </Suspense>
              </HashRouter>
      


}

export default App;
