import React, { Component} from 'react';
import '../styles/contact.scss';
import Fade from 'react-reveal/Fade';
import github from '../images/github-logo.png';
import gmail from '../images/gmail.png';
import linkedin from '../images/linkedin.png';
import medium from '../images/medium.png';
import twitter from '../images/twitter.png';

class Contact extends Component {
    render() {
    return(
        <Fade bottom>
            <div id="Contact-section">
                <h2 className="cent-line"> I am available for any collabs and new ideas here : </h2>
                <div className="logos">       
                    <a href="https://github.com/eshaan007/" target="_blank" rel="noopener noreferrer"><img className="logoc" src={github} alt="github"></img></a>
                    <a href="mailto:eshaany2k@gmail.com" target="_blank" rel="noopener noreferrer"><img className="logoc" src={gmail} alt="gmail"></img></a>
                    <a href="https://linkedin.com/in/eshaan-khurana/" target="_blank" rel="noopener noreferrer"><img className="logoc" src={linkedin} alt="linkedin"></img></a>
                    <a href="https://medium.com/@eshaany2k/" target="_blank" rel="noopener noreferrer"><img className="logoc" src={medium} alt="medium"></img></a>
                    <a href="https://twitter.com/eshaaaan007" target="_blank" rel="noopener noreferrer"><img className="logoc" src={twitter} alt="twitter"></img></a>
               </div>
            </div>
        </Fade>
    );
    }
}

export default Contact;