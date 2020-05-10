import React from 'react';
import '../styles/navbar.scss';

const Navbar = () => {
    return(
        <div>
            <ul className="nav">
                <li> <a></a> </li>
                <li> <a href=""> Home </a> </li>
                <li> <a href=""> About Me</a> </li>
                <li> <a href=""> Skills</a> </li>
                <li> <a href=""> Certifications</a> </li>
                <li> <a href=""> Projects</a> </li>
                <li> <a href=""> Experience</a> </li>
                <li> <a href=""> Contact Me</a> </li>
            </ul>
        </div>
    );
}

export default Navbar