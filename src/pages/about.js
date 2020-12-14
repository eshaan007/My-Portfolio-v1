import React, { Component} from 'react';
import '../styles/about.scss';
import Fade from 'react-reveal/Fade';
import { Column, Row } from 'simple-flexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faFire, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
    render() {
    return(

        <div id="about-page">
            <div className="contain1">
            <Fade bottom>        
                <h3 className="heading"> <a className="number-about" href=" ">01. </a>About Me </h3>
                <Column className="col2" flexGrow={1}>
                    <div className="am-size">    
                        <Fade bottom>
                            <div className="am-1">
                                <h4 className="about-me">Hello! I'm Eshaan Khurana I am currently a 3rd year Undergraduate (2018-22) at <a className="bold-blue" href=" ">Indian Institute of Information Technology, Vadodara </a>pursuing B. Tech. in Information Technology. I love Developing, Designing and Decentralizing Websites. 
                                    I enjoy designing Responsive websites using Multiple frameworks provided by the Mighty <a className="bold-yellow" href=" "> Javascript. </a></h4>

                                <h4 className="about-me"> My goal is to build pixel-perfect components and practical projects which provide a rich user experience with real world application.<br/> The Future is Decentralized. </h4>
                            </div>
                        </Fade>    

                        <Row wrap horizontal='spaced'>
                            <Fade bottom>
                                <Column className="about-column-1" flexGrow={1} horizontal='spaced'>
                                    <h4 className="about-me-bold"> <FontAwesomeIcon icon={faHeartbeat} /> Life so Far...</h4>     
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Breathing since 2000 </h4> 
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Graduating from IIITV in 2022 </h4>
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Being a Tech-Geek since 2010</h4>
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Started Coding in 2018 </h4>         
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Developing Awesome Websites ️ </h4>         
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Looking to Contribute to OSS actively </h4>                 
                                </Column>
                            </Fade>    
                            
                            <Fade bottom>
                                <Column className="about-column-2" flexGrow={1} horizontal='spaced'>
                                    <h4 className="about-me-bold"> <FontAwesomeIcon icon={faFire} /> Passionate About...</h4> 
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Jamming on Acoustic Guitars</h4>     
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Listening to Rock & Country Music</h4>         
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Blogging Tech and Thoughts</h4>                                       
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Watching Football</h4>        
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Food</h4>                       
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Gaming</h4>  
                                </Column>
                            </Fade>    

                            <Fade bottom>
                                <Column className="about-column-3" flexGrow={1} horizontal='spaced'>
                                    <h4 className="about-me-bold"> <FontAwesomeIcon icon={faLaptopCode} /> Learning...</h4>   
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Flutter</h4>                        
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> VueJS</h4>                        
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> CI/CD</h4>         
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Web Security</h4>         
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Cryptographic Algorithms</h4>         
                                    <h4 className="about-me_bullet"><h className="arrow">⪢</h> Testing using Jest</h4>                      
                                </Column>
                            </Fade>
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
