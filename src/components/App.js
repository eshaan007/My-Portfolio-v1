import React, { Component } from 'react';                              
import '../styles/App.scss';
import Head from './head.js';
import Navbar from './navbar.js';
import About from '../pages/about.js';
import Skills from '../pages/skills.js';
import Projects from '../pages/projects.js';
import Footer from '../components/footer.js';
// import Contact from '../pages/contact.js';
import Fade from 'react-reveal/Fade';
import Certifications from '../pages/certifications.js';
import me from '../images/me-code-4.png';

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
        <h2 className="aftername"> I Design and Decentralize the Web.</h2>
        <h4 className="desc">I'm an incoming Software Engineer based in Navi Mumbai, IN specializing in building, designing and decentralizing websites, applications and everything in between.
        </h4>

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
      <img className="me" src = {me} alt="Eshaan"/>
      </Fade>
      <About />
      <Skills />
      <Certifications />
      <Projects />
      {/* <Contact/> */}
      <Footer />
    </div>
  );
}
}

export default App;
