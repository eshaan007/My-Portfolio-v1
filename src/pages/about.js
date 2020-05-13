import React from 'react';
import '../styles/about.scss';
import me from '../images/me-code-4.png'

const About = () => {
    return(
        <div>
            <div className="contain1">
                <h3 className="heading"> <a className="number-about">01. </a>About Me </h3>
                <h4 className="about-me-bold"> Hello! I am Eshaan Khurana. </h4>
                <h4 className="about-me-bold"> I am a web developer leaning towards front end development and design.</h4>
                <h4 className="about-me"> I am currently a 2nd year student at <a className="bold-blue">Indian Institute of Information Technology, Vadodara </a>pursuing B. Tech. in Information Technology.
                I enjoy designing websites using multiple frameworks and tools provided by <a className="bold-yellow"> JS </a>.</h4>

                <h4 className="about-me"> My goal is to build <a className="bold-blue">pixel-perfect components</a> and practical projects which provide a rich user experience with <a className="bold-white">real world application.</a> </h4>
             
                {/* <h4 id="no-mob" className="about-me"> I aspire toward a career that will allow me to channelize my creativity towards building interfaces which are not only <a className="bold-white">mobile friendly</a> but also user friendly providing engaging experiences.
                I'm a keen learner who is always <a className="bold-white">looking for opportunities to absorb and work </a>with those who are willing to share their knowledge and experience.</h4>
                 */}
                <h4 className="about-me">  <a className="bold-white"> When not in front of a computer,</a> you will probably find me playing my
                    <a className="bold-brown"> guitar, </a> relishing
                     music, watching football, blogging or enjoying 
                    <a className="bold-green"> gaming sessions </a> with my friends.</h4>

            </div>

            <img className="me" src = {me} alt="Eshaan"/>
        </div>
    );
}

export default About