import React,{ Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faFire, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import '../styles/skills.scss';
import Fade from 'react-reveal/Fade';

class Skills extends Component {
    render() {
    return(
        <div id="skill-top">

            <Fade bottom>
            <h3 className="heading_1"> <a className="number-about" href=" "> 02. </a> My Skill-Set </h3>
            <h4 className="about-me-bold1"> Some technologies I have experience working with :</h4>        
            </Fade>

            <div id="no-mob" className="logo-container">       

                    <Row wrap horizontal='spaced'>
                        <Fade bottom>
                            <Column className="about-column-1" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Languages</h4>     
                                <h4 className="about-me_bullet">• Javascript(ES6+) </h4> 
                                <h4 className="about-me_bullet">• Java </h4>
                                <h4 className="about-me_bullet">• HTML</h4>
                                <h4 className="about-me_bullet">• S(CSS) </h4>         
                                <h4 className="about-me_bullet">• C/C++ ️ </h4>  
                                <h4 className="about-me_bullet">• SQL ️ </h4>                
                            </Column>
                        </Fade>    
                        
                        <Fade bottom>
                            <Column className="about-column-2" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Frameworks</h4> 
                                <h4 className="about-me_bullet">• ReactJS</h4>     
                                <h4 className="about-me_bullet">• Bootstrap4</h4>         
                                <h4 className="about-me_bullet">• ExpressJS</h4>                                       
                                <h4 className="about-me_bullet">• GraphQL</h4>        
                                <h4 className="about-me_bullet">• JQuery</h4> 
                                <h4 className="about-me_bullet">• GatsbyJS/ Next.js</h4>                                             
                            </Column>
                        </Fade>    

                        <Fade bottom>
                            <Column className="about-column-1" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Research Interest</h4>     
                                <h4 className="about-me_bullet">• Web Security </h4> 
                                <h4 className="about-me_bullet">• Evolution of Blockchain  </h4>
                                <h4 className="about-me_bullet">• Distributed Ledger Technology</h4>
                                <h4 className="about-me_bullet">• Cryptographic Primitives of Blockchain </h4>                        
                            </Column>
                        </Fade>    

                        <Fade bottom>
                            <Column className="about-column-1" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Blockchain Development</h4>     
                                <h4 className="about-me_bullet">• Solidity </h4> 
                                <h4 className="about-me_bullet">• Web3.js </h4>
                                <h4 className="about-me_bullet">• Truffle </h4>
                                <h4 className="about-me_bullet">• Ganache </h4>
                                <h4 className="about-me_bullet">• Distributed Applications </h4>
                            </Column>
                        </Fade>    

                       
                        <Fade bottom>
                            <Column className="about-column-3" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Tools </h4>  
                                <h4 className="about-me_bullet">• VSCode & Bash</h4>   
                                <h4 className="about-me_bullet">• RemixIDE </h4> 
                                <h4 className="about-me_bullet">• Firebase</h4>    
                                <h4 className="about-me_bullet">• Git & Github</h4>         
                                <h4 className="about-me_bullet">• Chrome DevTools</h4>         
                                <h4 className="about-me_bullet">• Postman</h4>         
                                <h4 className="about-me_bullet">• Figma</h4>                      
                            </Column>
                        </Fade>  

                        
                    </Row>
            </div>
        </div>
    );
    }
}
export default Skills;