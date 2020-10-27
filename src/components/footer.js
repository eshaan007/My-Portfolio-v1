import React, { Component } from 'react';
import '../styles/footer.scss';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import Flip from 'react-reveal/Flip';

 class Footer extends Component{
    render() {
    return(   

        <Fade bottom>
            <div className="footer-container">
                {/* <Flip cascade> */}
                <h4 className="intro1"> Designed & Developed by</h4>
                <h4 className="intro1"> Eshaan Khurana <span role="img" aria-label="rock"> 🤘</span> 2020</h4>
                {/* </Flip> */}

                <div className="links">
                    <a className="arrow-link-1" href="mailto:eshaany2k@gmail.com" target="_blank" rel="noopener noreferrer">MAIL</a>
                    <a className="arrow-link-1" href="https://github.com/eshaan007/" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a className="arrow-link-1" href="https://linkedin.com/in/eshaan-khurana/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    <a className="arrow-link-1" href="https://twitter.com/eshaaaan007/" target="_blank" rel="noopener noreferrer">TWITTER</a>
                    <a className="arrow-link-1" href="https://medium.com/@eshaany2k/" target="_blank" rel="noopener noreferrer">MEDIUM</a>
                </div>

                <div className="favicon-again">
                    <a className="arrow-link-1" href="mailto:eshaany2k@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="1.5x"/>{   }</a>
                    <a className="arrow-link-1" href="https://github.com/eshaan007/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />{   }</a>
                    <a className="arrow-link-1" href="https://linkedin.com/in/eshaan-khurana/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} />{   }</a>
                    <a className="arrow-link-1" href="https://twitter.com/eshaaaan007/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} />{   }</a>
                    <a className="arrow-link-1" href="https://medium.com/@eshaany2k/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium} />{   }</a>
                </div>

            </div>
        </Fade>
    );
}
}

export default Footer;