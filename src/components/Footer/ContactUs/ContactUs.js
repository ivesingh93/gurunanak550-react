import React from 'react';
import './ContactUs.css';

const contact_us = () => (
    <div id="contact-us">
        <h2 style={{color: '#77a6a3'}}>Contact Us</h2><br></br>
        <div>
            <i className="fas fa-phone" style={{color: '#77a6a3'}}></i>  +91 84273 19268
            &nbsp; &nbsp; | &nbsp; &nbsp;
            <i className="fas fa-envelope" style={{color: '#77a6a3'}}></i>  info@ecosikh.org
            <br></br>
            <br></br>
            <a href="https://www.facebook.com/EcoSikh/" target="_blank">
                <button type="button" className="btn btn-primary btn-sm">
                    <i class="fab fa-facebook fa-2x"></i>
                </button>
            </a>
            &nbsp; &nbsp;
            <a href="https://twitter.com/ecosikh" target="_blank">
                <button type="button" className="btn btn-info btn-sm">
                    <i class="fab fa-twitter fa-2x"></i>
                </button>
            </a>
            &nbsp; &nbsp;
            <a href="https://www.youtube.com/user/ecosikhorg" target="_blank">
                <button type="button" className="btn btn-danger btn-sm">
                    <i class="fab fa-youtube fa-2x"></i>
                </button>
            </a>
        </div>
    </div>
);

export default contact_us;