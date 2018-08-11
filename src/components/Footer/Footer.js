import React from 'react';
import Donate from './Donate/Donate';
import ContactUs from './ContactUs/ContactUs';
import './Footer.css';
const footer = () => (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-12">
                    <Donate/>
                </div>
                <div className="col-xl-4 col-lg-12">
                    <ContactUs/>
                </div>
            </div>

        </div>
    </div>
);

export default footer;
