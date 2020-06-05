import React, { Component } from 'react';                              
import '../styles/App.scss';
import Head from './head.js';
import Navbar from './navbar.js';
import avatar from '../images/avataaar.png';
import About from '../pages/about.js';
import Skills from '../pages/skills.js';
import Footer from '../components/footer.js';
import Fade from 'react-reveal/Fade';
import Certifications from '../pages/certifications.js';

class App extends Component {
  render() {
  return (
    <div id="top" className="App">
      <Head />
      <Navbar />
      <article className = "contain">
        <Fade bottom>
        <h4 className="intro"> <span className="animate-hand" role="img" aria-label="hand-wave">👋</span> Hi, my name is </h4>
        <Fade bottom cascade>
        <h2 className="name">Eshaan Khurana.</h2>
        </Fade>
        <h2 className="aftername"> I build amazing experiences.</h2>
        <h4 className="desc">I'm a Full Stack Web Developer, Specializing in Front-End Development and Design..
          Here's my Profile <a className="highlight-link" href="https://github.com/eshaan007" target="_blank" rel="noopener noreferrer">@eshaan007</a>👨‍💻</h4>
        <p>
          <button className="arrow-link" target="_blank" rel="noopener noreferrer">
            <a className="mail" href="mailto:eshaany2k@gmail.com">
              Get in touch
            </a>
          </button>
        </p>
        </Fade>
      </article> 
      <Fade bottom>
      <img className="myavatar" src = {avatar} alt="Avatar"/>
      </Fade>
      <About />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  );
}
}

export default App;
