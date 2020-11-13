import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

import * as serviceWorker from './serviceWorker';
import Layout from './components/Layout';
import Hero from './components/Hero'; 
import Experience from './components/Experience'
import About from './components/About';
import Skills from './components/skills';
import Contact from './components/Contact'

import ScrollToTop from './components/ScrollToTop';




ReactDOM.render(
  <React.StrictMode>
    <ScrollToTop/>
    <Layout/>
    
    <Hero/>
    <About/>
    
    <Skills/>
    <Experience/>


    <Contact/>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
