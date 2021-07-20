import './App.css';
import {BrowserRouter,  Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import './App.scss'

function App() {
  return <BrowserRouter>
   <div className="container">
     
     

     <Switch>
       <Route exact path="/" > 
<Home/>
       </Route>
       <Route exact path="/projects" > 
<Projects/>
       </Route>
       <Route exact path="/skills" > 
<Skills/>
       </Route>
       <Route exactpath="/about" > 
<About/>
       </Route>
     </Switch>

</div>

</BrowserRouter>

   
}

      export default App;
