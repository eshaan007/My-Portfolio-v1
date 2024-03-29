import React,{ Component } from 'react';
import { Column, Row } from 'simple-flexbox';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import '../styles/skills.scss';
import Fade from 'react-reveal/Fade';

class Skills extends Component {
    render() {
    return(
        <div id="skill-top">

            <Fade bottom>
            <h3 className="heading_1"> <a className="number-about" href=" "> 02. </a> My Skills </h3>
            </Fade>

            <div id="no-mob" className="logo-container">       

                    <Row wrap horizontal='spaced'>
                        <Fade bottom>
                            <Column className="about-column-1" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Languages</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Javascript(ES6+) </h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Java </h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> HTML</h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> S(CSS) </h4>         
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> C/C++ ️</h4>  
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Python ️</h4>                
                            </Column>
                        </Fade>    
                        
                        <Fade bottom>
                            <Column className="about-column-2" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Frameworks</h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> ReactJS</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Redux</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Bootstrap4</h4>         
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> JQuery</h4> 
                            </Column>
                        </Fade>    

                        <Fade bottom>
                            <Column className="about-column-1" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Research Interest</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Software Project Management </h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Business Analytics </h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Product Management </h4>                        
                            </Column>
                        </Fade>    

                        <Fade bottom>
                            <Column className="about-column-1" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Blockchain Development</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Solidity </h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Web3.js </h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Truffle </h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Ganache </h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Distributed Applications </h4>
                            </Column>
                        </Fade>    

                       
                        <Fade bottom>
                            <Column className="about-column-3" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Tools </h4>  
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> VSCode </h4>   
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Adobe Photoshop </h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> RemixIDE </h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Jira</h4>    
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Git</h4>         
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Figma</h4>                      
                            </Column>
                        </Fade>  

                        
                    </Row>
            </div>
        </div>
    );
    }
}
export default Skills;
