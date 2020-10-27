import React, { Component } from 'react';                              

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Email extends Component {
    render() {
        return(
            <div id="Email-section">
                <a className="sign" href="mailto:eshaany2k@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fontHai" icon={faEnvelope} size="1x" color="#2bbc8a"/></a> {   }
            </div>
        );
    }
}

export default Email;

