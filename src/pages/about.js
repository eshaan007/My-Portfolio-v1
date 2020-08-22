import React, { Component} from 'react';
import '../styles/about.scss';
import me from '../images/me-code-4.png';
import Fade from 'react-reveal/Fade';

class About extends Component {
    render() {
    return(

        <div id="about-page">
            <div className="contain1">
            <Fade bottom>        
                <h3 className="heading"> <a className="number-about" href=" ">01. </a>About Me </h3>
                <h4 className="about-me-bold"> Hello! I am Eshaan Khurana. </h4>
                <h4 className="about-me-bold"> I am a developer leaning towards front end web development and design..</h4>
                <h4 className="about-me"> I am currently a 3rd year Undergraduate (2018-22) at <a className="bold-blue" href=" ">Indian Institute of Information Technology, Vadodara </a>pursuing B. Tech. in Information Technology.
                I enjoy designing responsive websites using multiple frameworks and tools provided by <a className="bold-yellow" href=" "> JS. </a></h4>

                <h4 className="about-me"> My goal is to build <a className="bold-blue" href=" ">pixel-perfect components</a> and practical projects which provide a rich user experience with <a className="bold-white" href=" ">real world application.</a> </h4>

                <h4 className="about-me">  <a className="bold-white" href=" "> When not in front of a computer,</a> you will probably find me playing my
                     🎸, relishing
                    🎵🎧, watching ⚽, blogging👨‍💻 or enjoying 
                    <a className="bold-green" href=" "> </a> 🎮 sessions  with my friends.</h4>
            </Fade>    
            </div>

            <Fade bottom>  
            <img className="me" src = {me} alt="Eshaan"/>
            </Fade> 
        </div>
        
    );
    }
}

export default About;
