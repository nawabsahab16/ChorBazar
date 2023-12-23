import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';


const App = () => {
  return (
    <div> 
      <Navbar/>

      <div id='home'>
      <Home />
      </div>
    </div>
  )
}

export default App
