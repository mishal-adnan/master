import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (          
            <div className="section slide-personal-Intro-sixth slide-dark" id="contact">                
                <footer id="footer" className="footer footer-s1 footer-s1-home1">
                    <div id="footer-widget" className="footer-widget-s1 footer-widget-line bg-s1 position-relative">
                    <div className="container">
                        <div className="row d-lg-flex align-items-center text-center">
                        <div className="col-lg-12">
                            <h3 className="widget-title larger lt-sp06">Stay Connected</h3>
                        </div>
                        <div className="col-lg-12">
                            <div className="widget-info">
                            <p className="address">Islamabad, Pakistan</p>
                            <p style={{fontSize: 20 }} className="mail">mishal-adnan@hotmail.com</p>
                           
                            </div>
                        </div>
                        <div className="col-lg-12">
                        <div style={{ display: 'flex', justifyContent: 'center' ,gap: '20px' }}>
                            <div className="site-list site-list-pdl text-center" >
                        
                            <a 
            href='https://www.facebook.com/notyouraverageblogger1'
            target="_blank"
            rel="noopener noreferrer"
            className="bg-s1"><i className="fa fa-facebook" aria-hidden="true" /> </a>
                    
            <a
            href='https://www.linkedin.com/in/mishal-adnan/'
            target="_blank"
            rel="noopener noreferrer"
            className="bg-s2"><i className="fa fa-linkedin" aria-hidden="true" /> </a>

            <a
            href='https://www.instagram.com/regalstudio.pk/'
            target="_blank"
            rel="noopener noreferrer"
            className="bg-s4"><i  className="fa fa-instagram" aria-hidden="true"/> </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div id="bottom" className="bottom-s1">
                    <div className="container d-lg-flex justify-content-between">
                        <div className="copyright lt-sp02">
                        © Mishal Adnan, 2023 All rights reserved.
                        </div>
                        <div className="socials-list color-s1">
                        <a 
            href='https://www.facebook.com/notyouraverageblogger1'
            target="_blank"
            rel="noopener noreferrer"
             className="fa fa-facebook" aria-hidden="true" > </a>
                    
            <a
            href='https://www.linkedin.com/in/mishal-adnan/'
            target="_blank"
            rel="noopener noreferrer"
             className="fa fa-linkedin" aria-hidden="true" > </a>

            <a
            href='https://www.instagram.com/regalstudio.pk/'
            target="_blank"
            rel="noopener noreferrer"
           className="fa fa-instagram" aria-hidden="true"> </a>
                        </div>
                    </div>
                    </div>
                </footer>             
            </div>
        );
    }
}

export default Footer;
