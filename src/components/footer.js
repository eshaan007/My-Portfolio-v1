import React, { Component } from 'react';
import '../styles/footer.scss';
import Flip from 'react-reveal/Flip';

 class Footer extends Component{
    render() {
    return(   
        <div className="cont">
            <Flip cascade>
                <h4 className="intro1"> Designed and Developed by</h4>
                <h4 className="intro1"> Eshaan Khurana </h4>
                <h4 className="intro1"> © 2020</h4>
            </Flip>
        </div>
    );
}
}

export default Footer;