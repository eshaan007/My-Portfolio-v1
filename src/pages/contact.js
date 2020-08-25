import React, { Component} from 'react';
import '../styles/contact.scss';
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMediumM, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


class Contact extends Component {
    render() {
    return(
        <Fade bottom>
            <div id="Contact-section">
                <h2 className="cent-line"> I am available for any new collabs, opportunities and ideas here : </h2>
                <div className="logos">  
                    <a className="sign" href="https://github.com/eshaan007/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faGithub} size="3x" color="#2bbc8a"/></a> {   }
                    <a className="sign" href="mailto:eshaany2k@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faEnvelope} size="3x" color="#2bbc8a"/></a> {   }
                    <a className="sign" href="https://linkedin.com/in/eshaan-khurana/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faLinkedinIn} size="3x" color="#2bbc8a"/></a> {    }
                    <a className="sign" href="https://medium.com/@eshaany2k/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faMediumM} size="3x" color="#2bbc8a"/></a> {    }
                    <a className="sign" href="https://twitter.com/eshaaaan007" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faTwitter} size="3x" color="#2bbc8a"/></a> {    }
               </div>
            </div>
        </Fade>
    );
    }
}

export default Contact;