import React from 'react';
/* import { BrowserRouter as  Routes, Route } from 'react-router-dom'; */
import Home from "./components/Pages/Home/Home";
/* import Product from "./components/Pages/Product/Product"; */
import NavBar from './components/Containers/NavBar/NavBar';
import Footer from "./components/Containers/Fotter/Footer";


const App = () => {
    return(
    <div className='App'>
    
    
    
        <NavBar/> 
            
        <Home/>               
                   
   
        <Footer/>
        
    </div>
    );
}


export default App;