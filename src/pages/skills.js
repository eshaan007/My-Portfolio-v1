import React from 'react';
import i1 from '../images/android-studio.png';
import '../styles/skills.scss';

const Skills = () => {
    return(
        <div>
            <h3 className="heading"> <a className="number-about">02. </a> My Skill - Set </h3>
            <div className="logo-container">
                <img className="logo" src={i1} alt="android"></img>
            </div>
        </div>
    )
}

export default Skills