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
import expressjs from '../images/expressjs.png';
import netlify from '../images/netlify.png';
import vscode from '../images/vscode.png';
import figma from '../images/figma.png';
import mysql from '../images/mysql.png';
import mongodb from '../images/mongodb.png';

import '../styles/skills.scss';

const Skills = () => {
    return(
        <div>

        <div id="skills-page">
        </div>
            
            <div>
                <h3 className="heading"> <a className="number-about"> 02. </a> My Skill - Set </h3>
                <h4 className="about-me-bold1"> Some technologies I have experience working with :</h4>
                
                <div id="no-mob" className="logo-container">
                    
                    <img className="logo" src={html5} alt="html5"></img>
                    <img className="logo" src={css3} alt="css"></img>
                    <img className="logo" src={sass} alt="sass"></img>
                    <img className="logo" src={js} alt="js"></img>
                    <img className="logo" src={react} alt="react"></img>
                    <img className="logo" src={bootstrap4} alt="bootstrap"></img>
                    <img className="logo" src={jquery} alt="jquery"></img> 
                    <img className="logo" src={github} alt="github"></img>
                    <img className="logo" src={java} alt="java"></img>
                    <img className="logo" src={python3} alt="py"></img>
                    <img className="logo" src={C} alt="C"></img>
                    <img className="logo" src={Cpp} alt="C++"></img>
                    <img className="logo" src={nodejs} alt="node"></img>
                    <img className="logo1" src={mongodb} alt="mongodb"></img>
                    <img className="logo" src={npm} alt="npm"></img>
                    <img className="logo" src={expressjs} alt="express"></img>
                    <img className="logo" src={postman} alt="postman"></img>
                    <img className="logo" src={mysql} alt="mysql"></img>
                    <img className="logo" src={android} alt="android"></img>
                    <img className="logo" src={firebase} alt="firebase"></img>
                    <img className="logo" src={linux} alt="linux"></img>
                    <img className="logo" src={vscode} alt="visual studio code"></img>
                    <img className="logo" src={figma} alt="figma"></img>
                    <img className="logo" src={netlify} alt="netlify"></img>
                    
                </div>
            </div>

        </div>
        )
    }

export default Skills