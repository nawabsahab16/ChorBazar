import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';


const App = () => {
  return (
    <div> 
      <Navbar/>

      <div id='home'>
      <Home />
      </div>

      <div id="shop">
        <Shop />
      </div>
    </div>
  )
}

export default App
