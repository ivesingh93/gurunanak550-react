import React from 'react';
import './Donate.css';

const donate = () => (
    <div id="contact-us">
        <h2 style={{color: 'rgb(0, 147, 181)', fontFamily: 'Open Sans'}}>Donation Information</h2><br></br>
        <div className="row">
            <div className="col">
                <h4>Pay by Cheque/NEFT</h4><br></br>
                <h5>Account in India</h5>
                EcoSikh Charitable Society<br></br>
                A/c No: 039088700000014<br></br>
                Bank Name: Yes Bank Ltd, Miller Ganj, Ludhiana<br></br>
                IFSC Code: YESB0000390
            </div>
            <div className="col">
                <h4>For online donations outside India</h4>
                <a href="https://tinyurl.com/yalw6dv2" target="_blank"><h4>Donate Online</h4></a>

            </div>
            <div className="col">
                <h4>Pay by Cheque in United States of America (USA)</h4><br></br>
                EcoSikh<br></br>
                2621 University Boulevard West<br></br>
                Silver Spring, MD 20902
            </div>
        </div>
    </div>
);

export default donate;