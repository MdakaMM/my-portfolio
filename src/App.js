import React from 'react';
import './App.css';
import {Element} from 'react-scroll';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {Route} from 'react-router-dom';
import {ProductConsumer} from './Context/Context';

function App() {
  return (
  <ProductConsumer>
    {value=>{
      return(
        <div className="App">

        <Navbar />

        <Element name="Home">
        <Route exact path="/" component={Header} />
        </Element>

        <div className="basic">
        <Element name="About">
        <Route exact path="/" component={About} />
        </Element>
        
        <Element name="Experience">
        <Route exact path="/" component={Experience} />
        </Element>

        <Element name="Projects">
        <Route exact path="/" component={Projects} />
        </Element>
        </div>
        
        

        <Element name="Contact">
        <Route exact path="/" component={Contact} />
        </Element>
     
  
      </div>
      )
    }}
  </ProductConsumer>
  );
}

export default App;
