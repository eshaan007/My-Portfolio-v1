import React, { Component} from 'react';
import '../styles/navbar.scss';
import Fade from 'react-reveal/Fade';
import Logowhite from '../images/logo-green.png';
 
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
           imgSrc: Logowhite
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
      }
    
      handleMouseOver() {
        this.setState({
          imgSrc: Logowhite
        });
      }
    
      handleMouseOut() {
        this.setState({
          imgSrc: Logowhite
        });
      }

    render() {
    return(
        <div>
            <header className="header">
                <Fade left>

                <a href="#top" className="logo"> 
                <div>
                  <img className="resolution" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} alt="logo"/>
                </div> </a>
                
                </Fade>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                <Fade right>
                    <li> <a className="ind" href="#about-page"> About Me </a> </li>
                    <li> <a className="ind" href="#skill-top"> Skills</a> </li>
                    <li> <a className="ind" href="#project-page"> Projects</a> </li>
                    <li> <a className="ind" href="#foot"> Contact Me</a> </li>
                    <button className="resume" target="_blank" rel="noopener noreferrer">
                      <li> <a className="res" href="https://drive.google.com/file/d/1imEtkJHxENAmnRnHRB9m_wxE1vR4qBHC/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Resume</a> </li>
                    </button>
                </Fade>            
                </ul>
            </header>
        </div>
    );
    }
}

export default Navbar
