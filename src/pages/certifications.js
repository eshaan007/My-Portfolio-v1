import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/certifications.scss';
import { Column, Row } from 'simple-flexbox';

class Certifications extends Component {
    render() {
        return (
            <div id="cert-page">

                <Fade bottom>
                    <h3 className="heading-cert"> <a className="number-about"> 03. </a> My Certifications </h3>
                </Fade>

                    <div className="logo-container">       

                        <div className="about-cert">
                        
                            <Column className="col1" flexGrow={1}>
                                <Row wrap vertical='center'>
                                <Column className="card" flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Front-End Web Development with React</h4>
                                <h4 className="cert-desc">-Coursera</h4>
                                </Column>
                                <Column className="card" flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">The Complete 2020 Web Development Bootcamp</h4>
                                <h4 className="cert-desc">-Udemy</h4>
                                </Column>
                                </Row>
                            </Column>

                            <Column className="col2" flexGrow={1}>
                                <Row wrap vertical='center'>
                                <Column className="card" flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Front-End Web UI, Frameworks and Tools : Bootstrap4</h4>
                                <h4 className="cert-desc">-Coursera</h4>
                                </Column>
                                <Column className="card" flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">The Fundamentals of Digital Marketing</h4>
                                <h4 className="cert-desc">-Google</h4>
                                </Column>
                                </Row>
                            </Column>
                        
                            <Column className="col3" flexGrow={1}>
                                <Row wrap vertical='center'>
                                <Column className="card" flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">JAVA Skill IQ : Expert</h4>
                                <h4 className="cert-desc">-PluralSight</h4>
                                </Column>
                                <Column className="card" flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">MySQL Fundamentals</h4>
                                <h4 className="cert-desc">-PluralSight</h4>
                                </Column>
                                </Row>
                            </Column>

                            <Column className="col3" flexGrow={1}>
                                <Row wrap vertical='center'>
                                <Column className="card" flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Completed Explore ML Track : Intermediate Level</h4>
                                <h4 className="cert-desc">-Google</h4>
                                </Column>
                                <Column className="card" flexGrow={1} horizontal='center'>
                                <h4 className="cert-name">Data Structures And Algorithms</h4>
                                <h4 className="cert-desc">-GirlScript.tech</h4>
                                </Column>
                                </Row>
                            </Column>
                        
                        
                        </div>
                    </div>
            </div>
        );
    }
}

export default Certifications;