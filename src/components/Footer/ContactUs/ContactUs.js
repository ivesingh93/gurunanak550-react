import React from 'react';
import './ContactUs.css';

const contact_us = () => (
    <div id="contact-us">
        <h2 style={{color: '#A8C545', fontFamily: 'BlinkMacSystemFont, "Open Sans"'}}>Contact Us</h2><br></br>
        <div>
            <i className="fas fa-phone" style={{color: '#77a6a3'}}></i>  <a href="tel:+91 84273 19268" style={{color:"#fff"}}>+91 84273 19268</a>
            &nbsp; | &nbsp;
            <i className="fas fa-envelope" style={{color: '#77a6a3'}}></i>  <a href="mailto:info@ecosikh.org" style={{color:"#fff"}}>info@ecosikh.org</a>
            <br></br>
            <br></br>
            <a href="https://www.facebook.com/EcoSikh/" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-primary btn-sm" style={{backgroundColor: "#0069d9"}}>
                    <i className="fab fa-facebook fa-2x"></i>
                </button>
            </a>
            &nbsp; &nbsp;
            <a href="https://twitter.com/ecosikh" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-info btn-sm">
                    <i className="fab fa-twitter fa-2x"></i>
                </button>
            </a>
            &nbsp; &nbsp;
            <a href="https://www.youtube.com/user/ecosikhorg" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-danger btn-sm">
                    <i className="fab fa-youtube fa-2x"></i>
                </button>
            </a>
        </div>
    </div>
);

export default contact_us;