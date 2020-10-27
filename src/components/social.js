import React, { Component } from 'react';                              

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMediumM, faTwitter} from '@fortawesome/free-brands-svg-icons'

class Social extends Component {
    render() {
        return(
            <div id="Social-section">
                <div className="logos">  
                    <a className="sign" href="https://github.com/eshaan007/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faGithub} size="1x" color="#2bbc8a"/></a> {   }                    
                    <a className="sign" href="https://linkedin.com/in/eshaan-khurana/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faLinkedinIn} size="1x" color="#2bbc8a"/></a> {    }
                    <a className="sign" href="https://medium.com/@eshaany2k/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faMediumM} size="1x" color="#2bbc8a"/></a> {    }
                    <a className="sign" href="https://twitter.com/eshaaaan007" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faTwitter} size="1x" color="#2bbc8a"/></a> {    }
                </div>
            </div>
        );
    }
}

export default Social;