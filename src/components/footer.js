import React, { Component } from 'react';
import '../styles/footer.scss';
import Flip from 'react-reveal/Flip';

 class Footer extends Component{
    render() {
    return(
        // <a  href="https://www.netlify.com">
        //     <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
        // </a>
        
        <div className="cont">
            <Flip cascade>
                <h4 className="intro1"> Designed and Built from scratch by</h4>
                <h4 className="intro1"> Eshaan Khurana </h4>
                <h4 className="intro1"> © 2020</h4>
            </Flip>
        </div>
        

    );
}
}

export default Footer;