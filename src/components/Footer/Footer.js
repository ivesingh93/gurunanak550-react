import React from 'react';
import Donate from './Donate/Donate';
import ContactUs from './ContactUs/ContactUs';
import './Footer.css';
const footer = () => (
    <div>
        <div className="footer">
            <div className="row">
                <div className="col">
                    <Donate/>
                </div>
                <div className="col">
                    <ContactUs/>
                </div>
            </div>

        </div>
    </div>
);

export default footer;
