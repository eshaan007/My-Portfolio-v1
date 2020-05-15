import React from 'react';
import '../styles/navbar.scss';

const Navbar = () => {
    return(
        <div>

            <header className="header">
                <a href="" className="logo">EK</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li> <a href=""> About Me </a> </li>
                    <li> <a href=""> Skills</a> </li>
                    <li> <a href=""> Projects</a> </li>
                    <li> <a href=""> Contact Me</a> </li>
                    <button className="resume" target="_blank" rel="noopener noreferrer">
                        <li> <a className="res" href="https://google.com"> Resume</a> </li>
                    </button>
                                        
                </ul>
            </header>
        </div>
    );
}

export default Navbar
