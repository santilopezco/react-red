import React from 'react';
import NavBar from './components/NavBar/NavBar'
/* import About from './components/About/About' */
import Call from './components/Call/Call';
import Follow from './components/Follow/Follow'
import Home from './components/Home/Home'
import Products from './components/About/About'
import Slider from './components/Slider/Slider.jsx'

const App = () => {
    return(
    <div className='App'>
            
            < NavBar/>
            < Home/>
            < Slider />
            < Follow/>
            < Call/>
            < Products/>
        
    </div>
    );
}


export default App;