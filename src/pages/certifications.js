import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/certifications.scss';
import { Column, Row } from 'simple-flexbox';

class Certifications extends Component {
    render() {
        return (
            <div id="cert-page">
                <div className="contain1">
                <Fade bottom>
                    <h3 className="heading-cert"> <a className="number-about"> 03. </a> My Certifications </h3>
                </Fade>

                    <div id="no-mob" className="logo-container">       

                        <div className="about-cert">
                        
                            <Column flexGrow={1}>
                                <Row wrap vertical='center'>
                                <Column flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Front-End Web Development with React</h4>
                                <h4 className="cert-desc">By Coursera</h4>
                                </Column>
                                <Column flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Front-End Web Development with React</h4>
                                <h4 className="cert-desc">By Coursera</h4>
                                </Column>
                                </Row>
                            </Column>

                            <Column flexGrow={1}>
                                <Row wrap vertical='center'>
                                <Column flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Front-End Web Development with React</h4>
                                <h4 className="cert-desc">By Coursera</h4>
                                </Column>
                                <Column flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Front-End Web Development with React</h4>
                                <h4 className="cert-desc">By Coursera</h4>
                                </Column>
                                </Row>
                            </Column>
                        
                            <Column flexGrow={1}>
                                <Row wrap vertical='center'>
                                <Column flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Front-End Web Development with React</h4>
                                <h4 className="cert-desc">By Coursera</h4>
                                </Column>
                                <Column flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Front-End Web Development with React</h4>
                                <h4 className="cert-desc">By Coursera</h4>
                                </Column>
                                </Row>
                            </Column>
                        
                        
                        </div>
                
                    </div>
                </div>
            </div>
        );
    }
}

export default Certifications;