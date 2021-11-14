import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact'
import Home from './Components/Home'



const App = ()=> { 
  return (
<div className="App">
  <div className="wrapper">
    
    <Home/>
    <About/>
    <Portfolio/>
    <Resume/>
    <Contact/>
  </div>
  
</div>

 
     

   
  )
}

export default App;

