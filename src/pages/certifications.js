import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/certifications.scss';
import { Column, Row } from 'simple-flexbox';

class Certifications extends Component {
    render() {
        return (
            <div id="cert-page">

                <Fade bottom>
                    <h3 className="heading-cert"> <a className="number-about" href="/resume"> 03. </a> My Certifications </h3>
                </Fade>

                    <div className="cert-container">       

                        <div className="about-cert">

                        <Fade bottom>
                            <Column className="col1" flexGrow={1}>
                                <Row wrap horizontal='spaced'>
  
                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" href="https://coursera.org/share/152a0d77124b59c561eac67dc5b9a9d8" target="_blank" rel="noopener noreferrer" >Blockchain Specialization</a>
                                        <a className="cert-desc" href="https://coursera.org/share/152a0d77124b59c561eac67dc5b9a9d8">- The University of Buffalo </a>
                                    </Column>

                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" target="_blank" rel="noopener noreferrer" href="https://coursera.org/share/96829d634fedba6f11ea5681a7020f3d">Guitar Specialization</a>
                                        <a className="cert-desc" href="https://coursera.org/share/96829d634fedba6f11ea5681a7020f3drse">- Berklee College of Music</a>
                                    </Column>
                                </Row>
                            </Column>
                            </Fade>

                            <Fade bottom>
                            <Column className="col1" flexGrow={1}>
                                <Row wrap horizontal='spaced'>
  
                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" href="https://coursera.org/share/8075cf9cd83b6feea0d7deecad649842" target="_blank" rel="noopener noreferrer" >Front-End Web Development with React</a>
                                        <a className="cert-desc" href="https://coursera.org/share/8075cf9cd83b6feea0d7deecad649842">- Hong Kong University of Science and Technology </a>
                                    </Column>

                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" target="_blank" rel="noopener noreferrer" href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-81c4e375-06f5-4fc2-9028-61ee4df7a8f1.pdf">The Complete 2020 Web Development Bootcamp</a>
                                        <a className="cert-desc" href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-81c4e375-06f5-4fc2-9028-61ee4df7a8f1.pdf">- Udemy</a>
                                    </Column>
                                </Row>
                            </Column>
                            </Fade>

                            <Fade bottom>
                            <Column className="col2" flexGrow={1}>
                                <Row wrap horizontal='spaced'>
                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" href="https://www.coursera.org/account/accomplishments/certificate/KZD3YCXMXK25" target="_blank" rel="noopener noreferrer">Front-End Web UI, Frameworks and Tools : Bootstrap4</a>
                                        <a className="cert-desc" href="https://www.coursera.org/account/accomplishments/certificate/KZD3YCXMXK25">- Hong Kong University of Science and Technology</a>
                                    </Column>
                                
                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" href="https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code" target="_blank" rel="noopener noreferrer">The Fundamentals of Digital Marketing</a>
                                        <a className="cert-desc" href="https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code">- Google</a>
                                    </Column>
                                </Row>
                            </Column>
                            </Fade>

                            <Fade bottom>
                            <Column className="col3" flexGrow={1}>
                                <Row wrap horizontal='spaced'>
                                
                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fapp.pluralsight.com%2Fscore%2Fredir%2F3c330b34-6eb1-4374-a4ca-8cfbbaf13e8b%3Fec97ad1aba" target="_blank" rel="noopener noreferrer">JAVA Skill IQ : Expert</a>
                                        <a className="cert-desc" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fapp.pluralsight.com%2Fscore%2Fredir%2F3c330b34-6eb1-4374-a4ca-8cfbbaf13e8b%3Fec97ad1aba">- PluralSight </a>
                                    </Column>
                                
                                
                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-4c5df15f-8201-4a6d-958b-f19add0c9a54.pdf" target="_blank" rel="noopener noreferrer">Java Programming Masterclass</a>
                                        <a className="cert-desc" href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-4c5df15f-8201-4a6d-958b-f19add0c9a54.pdf">- Udemy</a>
                                    </Column>

                                    
                                </Row>
                            </Column>
                            </Fade>

                            {/* <Fade bottom>
                            <Column className="col3" flexGrow={1}>
                                <Row wrap horizontal="spaced">
                                
                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name-pluralsight" href="https://www.docdroid.net/wdNtKmG/mysqlfundamentals-pdf" target="_blank" rel="noopener noreferrer">MySQL Fundamentals</a>
                                        <a className="cert-desc" href="https://www.docdroid.net/wdNtKmG/mysqlfundamentals-pdf">- PluralSight</a>
                                    </Column>

                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name-girlscript" href="https://imgur.com/a/MRDMJRi" target="_blank" rel="noopener noreferrer">Data Structures And Algorithms</a>
                                        <a className="cert-desc" href="https://imgur.com/a/MRDMJRi">- GirlScript.tech</a>
                                    </Column>
                                </Row>
                            </Column>
                            </Fade> */}

                            <Fade bottom>
                            <Column className="col1" flexGrow={1}>
                                <Row wrap horizontal='spaced'>
  
                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" href="https://google.qwiklabs.com/public_profiles/be9c5216-ec84-405c-8537-40e46f73ab26" target="_blank" rel="noopener noreferrer">Explore ML Track : Intermediate Level</a>
                                        <a className="cert-desc" href="https://google.qwiklabs.com/public_profiles/be9c5216-ec84-405c-8537-40e46f73ab26">- Google</a>
                                    </Column>

                                    <Column className="card" flexGrow={1} horizontal='spaced'>
                                        <a className="cert-name" target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/eshaan007/responsive-web-design">Responsive Web Design</a>
                                        <a className="cert-desc" href="https://www.freecodecamp.org/certification/eshaan007/responsive-web-design">- freeCodeCamp.org</a>
                                    </Column>
                                </Row>
                            </Column>
                            </Fade>
                        
                        </div>
                    </div>
            </div>
        );
    }
}

export default Certifications;