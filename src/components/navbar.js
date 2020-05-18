import React, { Component} from 'react';
import '../styles/navbar.scss';
import Resume from '../images/Eshaan_Khurana_Resume.pdf';
import Fade from 'react-reveal/Fade';

class Navbar extends Component {
    render() {
    return(
        <div>
            <header className="header">
                <Fade left>
                <a href="/" className="logo">EK</a>
                </Fade>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                <Fade right>
                    <li> <a className="ind" href="#about-page"> About Me </a> </li>
                    <li> <a className="ind" href="#skills-page"> Skills</a> </li>
                    <li> <a className="ind" href="/"> My Work</a> </li>
                    <li> <a className="ind" href="/"> Contact Me</a> </li>
                    <button className="resume" target="_blank" rel="noopener noreferrer">
                        <li> <a className="res" href={Resume} target="_blank"> Resume</a> </li>
                    </button>
                </Fade>            
                </ul>
            </header>
        </div>
    );
    }
}

export default Navbar
