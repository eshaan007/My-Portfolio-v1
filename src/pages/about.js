import React, { Component} from 'react';
import '../styles/about.scss';
import Fade from 'react-reveal/Fade';
import { Column, Row } from 'simple-flexbox';

class About extends Component {
    render() {
    return(

        <div id="about-page">
            <div className="contain1">
            <Fade bottom>        
                <h3 className="heading"> <a className="number-about" href=" ">01. </a>About Me </h3>
                <Column className="col2" flexGrow={1}>
                    <div className="am-size">    
                        <div className="am-1">
                            <h4 className="about-me">Hello! I am Eshaan Khurana. I am a developer leaning towards front end web development and design. I am currently a 3rd year Undergraduate (2018-22) at <a className="bold-blue" href=" ">Indian Institute of Information Technology, Vadodara </a>pursuing B. Tech. in Information Technology.
                            I enjoy designing responsive websites using multiple frameworks and tools provided by <a className="bold-yellow" href=" "> JS. </a></h4>

                            <h4 className="about-me"> My goal is to build pixel-perfect component and practical projects which provide a rich user experience with <a className="bold-white" href=" ">real world application.</a> </h4>
                        </div>
                        
                        <Row wrap horizontal='spaced'>
                            <Column className="about-column" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold">Life so Far..</h4>     
                                <h4 className="about-me_bullet">• Breathing since 2000 </h4> 
                                <h4 className="about-me_bullet">• Studying @ IIITV'22 </h4>         
                                <h4 className="about-me_bullet">• Started Coding in 2018 </h4>         
                                <h4 className="about-me_bullet">• Developing Websites is ❤️️ </h4>         
                                <h4 className="about-me_bullet">• Contributing to OSS actively </h4>                 
                            </Column>

                            <Column className="about-column" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold">Passionate About..</h4>    
                                <h4 className="about-me_bullet">• Playing Guitars🎸</h4>         
                                <h4 className="about-me_bullet">• Producing Music🎵</h4>         
                                <h4 className="about-me_bullet">• Watching Football⚽</h4>         
                                <h4 className="about-me_bullet">• Blogging Tech👨‍💻</h4>         
                                <h4 className="about-me_bullet">• Gaming Sessions🎮</h4>  
                                <h4 className="about-me_bullet">• Food</h4>                
            
                            </Column>

                            <Column className="about-column" flexGrow={1} horizontal='spaced'>
                                <h4 className="about-me-bold">Learing..</h4>   
                                <h4 className="about-me_bullet">• Ethereum DApps </h4>                 
                                <h4 className="about-me_bullet">• AWS</h4>         
                                <h4 className="about-me_bullet">• CI/CD</h4>         
                                <h4 className="about-me_bullet">• Cryptography </h4>         
                                <h4 className="about-me_bullet">• Three.js </h4>         
             
                            </Column>
                        </Row>
                    </div>
                    
                </Column>


            </Fade>    
            </div>

        </div>
        
    );
    }
}

export default About;
