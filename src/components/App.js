import React from 'react';
import logo from '../logo.svg';
import '../styles/App.scss';
import Head from './head.js';
import Navbar from './navbar.js';
import avatar from '../images/avataaar.png';
import About from '../pages/about.js';
import Skills from '../pages/skills.js';

function App() {
  return (
    <div className="App">
      <Head />
      <Navbar />
      <article className = "contain">
        <h4 className="intro">Hi, my name is </h4>
        <h2 className="name">Eshaan Khurana.</h2>
        <h2 className="aftername"> I build things for the web.</h2>
        <h4 className="desc">I'm a Sophomore @ IIIT, Vadodara specializing in building websites using various frameworks.
          Check my Profile <a className="highlight-link" href="https://github.com/eshaan007" target="_blank" rel="noopener noreferrer">@eshaan007</a>👩🏻‍💻</h4>
        <p>
          <button className="arrow-link" target="_blank" rel="noopener noreferrer">
            <a className="mail" href="mailto:eshaany2k@gmail.com">
              Get in touch
            </a>
          </button>
        </p>
      </article> 

      <img className="myavatar" src = {avatar} alt="Avatar"/>
      <About />
      <Skills />
    </div>
  );
}

export default App;
