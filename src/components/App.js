import React from 'react';                              
import '../styles/App.scss';
import Head from './head.js';
import Navbar from './navbar.js';
import avatar from '../images/avataaar.png';
import About from '../pages/about.js';
import Skills from '../pages/skills.js';
import Footer from '../components/footer.js';

function App() {
  return (
    <div className="App">
      <Head />
      <Navbar />
      <article className = "contain">
        <h4 className="intro"> <span className="animate-hand">👋</span> Hi, my name is </h4>
        <h2 className="name">Eshaan Khurana.</h2>
        <h2 className="aftername"> I build amazing experiences.</h2>
        <h4 className="desc">I'm a Full Stack Web Developer, Specializing in Front-End Development and Design.
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
      <Footer />
    </div>
  );
}

export default App;
