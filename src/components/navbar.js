import React, { Component} from 'react';
import '../styles/navbar.scss';
import Resume from '../images/Eshaan_Khurana_Resume.pdf';
import Zoom from 'react-reveal/Zoom';

class Navbar extends Component {
    render() {
    return(
        <div>
            <Zoom>
            <header className="header">
                <a href="/" className="logo">EK</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li> <a className="ind" href="#about-page"> About Me </a> </li>
                    <li> <a className="ind" href="#skills-page"> Skills</a> </li>
                    <li> <a className="ind" href="/"> My Work</a> </li>
                    <li> <a className="ind" href="/"> Contact Me</a> </li>
                    <button className="resume" target="_blank" rel="noopener noreferrer">
                        <li> <a className="res" href={Resume} target="_blank"> Resume</a> </li>
                    </button>
                                        
                </ul>
            </header>
            </Zoom>
        </div>
    );
    }
}

export default Navbar
