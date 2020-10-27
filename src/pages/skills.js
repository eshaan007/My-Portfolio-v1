import React,{ Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import '../styles/skills.scss';
import Fade from 'react-reveal/Fade';

class Skills extends Component {
    render() {
    return(
        <div id="skill-top">

            <Fade bottom>
            <h3 className="heading_1"> <a className="number-about" href=" "> 02. </a> My Skills </h3>
            {/* <h4 className="about-me-bold1"> Some technologies I have experience working with :</h4>         */}
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
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> C/C++ ️ </h4>  
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> SQL ️ </h4>                
                            </Column>
                        </Fade>    
                        
                        <Fade bottom>
                            <Column className="about-column-2" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Frameworks</h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> ReactJS</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Bootstrap4</h4>         
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> ExpressJS</h4>                                       
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> GraphQL</h4>        
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> JQuery</h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> GatsbyJS/ Next.js</h4>                                             
                            </Column>
                        </Fade>    

                        <Fade bottom>
                            <Column className="about-column-1" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold"> Research Interest</h4>     
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Web Security </h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Evolution of Blockchain  </h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Distributed Ledger Technology</h4>
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Cryptographic Primitives of Blockchain </h4>                        
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
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> VSCode & Bash</h4>   
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> RemixIDE </h4> 
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Firebase</h4>    
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Git & Github</h4>         
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Chrome DevTools</h4>         
                                <h4 className="about-me_bullet"><h className="arrow">⪢</h> Postman</h4>         
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