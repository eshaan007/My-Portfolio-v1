import React, { Component } from 'react';
import '../styles/footer.scss';
import Fade from 'react-reveal/Fade';
// import Flip from 'react-reveal/Flip';

 class Footer extends Component{
    render() {
    return(   

        <Fade bottom>
            <div className="footer-container">
                {/* <Flip cascade> */}
                <h4 className="intro1"> Designed and Developed by</h4>
                <h4 className="intro1"> Eshaan Khurana <span role="img"> 🤘</span> 2020</h4>
                {/* </Flip> */}
                {/* <a className="sign" href="https://github.com/eshaan007/" target="_blank" rel="noopener noreferrer"> </a> { Github }
                <a className="sign" href="mailto:eshaany2k@gmail.com" target="_blank" rel="noopener noreferrer"> </a> { Mail }
                <a className="sign" href="https://linkedin.com/in/eshaan-khurana/" target="_blank" rel="noopener noreferrer"></a> { Linkedin }                
                <a className="sign" href="https://medium.com/@eshaany2k/" target="_blank" rel="noopener noreferrer"></a> {  Medium  }
                <a className="sign" href="https://twitter.com/eshaaaan007" target="_blank" rel="noopener noreferrer"></a> { } */}

                <div className="links">
                    <a className="arrow-link" href="mailto:eshaany2k@gmail.com" target="_blank" rel="noopener noreferrer">MAIL</a>
                    <a className="arrow-link" href="https://github.com/eshaan007/" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a className="arrow-link" href="https://linkedin.com/in/eshaan-khurana/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    <a className="arrow-link" href="https://twitter.com/eshaaaan007/" target="_blank" rel="noopener noreferrer">TWITTER</a>
                    <a className="arrow-link" href="https://medium.com/@eshaany2k/" target="_blank" rel="noopener noreferrer">MEDIUM</a>
                </div>
            </div>
        </Fade>
    );
}
}

export default Footer;