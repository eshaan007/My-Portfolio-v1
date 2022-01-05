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
        <h2 className="aftername"> I Lead Products to Success.</h2>
        <h4 className="desc">I'm a Product Manager based in India specializing in Managing products, Leading people and getting <b>Work Done!</b>
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
