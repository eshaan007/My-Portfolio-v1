import React from 'react';
import android from '../images/android-studio.png';
import bootstrap4 from '../images/bootstrap4.png';
import C from '../images/C.png';
import Cpp from '../images/C++.png';
import css3 from '../images/css3.png';
import firebase from '../images/firebase.png';
import github from '../images/github.png';
import html5 from '../images/html5.png';
import java from '../images/java.png';
import jquery from '../images/jquery.png';
import js from '../images/js.png';
import linux from '../images/linux.png';
import nodejs from '../images/nodejs.png';
import npm from '../images/npm.png';
import postman from '../images/postman.png';
import python3 from '../images/python3.png';
import react from '../images/react.png';
import sass from '../images/sass.png';

import '../styles/skills.scss';

const Skills = () => {
    return(
        <div>
            <h3 className="heading"> <a className="number-about">02. </a> My Skill - Set </h3>
            <h4 className="about-me-bold1"> These are the technologies I have experience working with :</h4>
            
            <div id="no-mob" className="logo-container">
                <img className="logo" src={android} alt="android"></img>
                <img className="logo" src={bootstrap4} alt="bootstrap"></img>
                <img className="logo" src={C} alt="android"></img>
                <img className="logo" src={Cpp} alt="android"></img>
                <img className="logo" src={css3} alt="android"></img>
                <img className="logo" src={firebase} alt="android"></img>
                <img className="logo" src={github} alt="android"></img>
                <img className="logo" src={html5} alt="android"></img>
                <img className="logo" src={java} alt="android"></img>
                <img className="logo" src={jquery} alt="android"></img>
                <img className="logo" src={js} alt="android"></img>
                <img className="logo" src={linux} alt="android"></img>
                <img className="logo" src={nodejs} alt="android"></img>
                <img className="logo" src={npm} alt="android"></img>
                <img className="logo" src={postman} alt="android"></img>
                <img className="logo" src={python3} alt="android"></img>
                <img className="logo" src={react} alt="android"></img>
                <img className="logo" src={sass} alt="android"></img>
            </div>
        </div>
    )
}

export default Skills