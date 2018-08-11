import React from 'react';
import './Donate.css';

const donate = () => (
    <div id="contact-us">
        <h2 style={{color: '#A8C545', fontFamily: 'BlinkMacSystemFont, "Open Sans"'}}>Donation Information</h2><br></br>
        <div className="row">
            <div className="col-sm-12 col-md-4 mb-4" style={{fontSize: ".9rem"}}>
                <h5>Pay by Cheque/NEFT</h5><br></br>
                <h6 style={{textDecoration:"underline"}}>Account in India</h6>
                EcoSikh Charitable Society<br></br>
                A/c No: 039088700000014<br></br>
                Bank Name: Yes Bank Ltd, Miller Ganj, Ludhiana<br></br>
                IFSC Code: YESB0000390
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
                <h5>For online donations outside India</h5><br></br>
                <a href="https://tinyurl.com/yalw6dv2" className="btn btn-primary btn-lg" role="button" aria-pressed="true" target="_blank" rel="noopener noreferrer">Donate Online</a>

            </div>
            <div className="col-sm-12 col-md-4 mb-4" style={{fontSize: ".9rem"}}>
                <h5>Pay by Cheque in United States of America (USA)</h5><br></br>
                EcoSikh<br></br>
                2621 University Boulevard West<br></br>
                Silver Spring, MD 20902
            </div>
        </div>
    </div>
);

export default donate;