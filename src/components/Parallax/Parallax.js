import React from 'react';
import './Parallax.css';
import message_2 from '../../assets/message_2.png';
import message_3 from '../../assets/message_3.png';
import Gallery from '../Gallery/Gallery';
import AboutEcoSikh from '../AboutEcoSikh/AboutEcoSikh';
import ContactUs from '../ContactUs/ContactUs';

const parallax = () => (

    <div>
        <div className="bgimg-1">
            <div class="flex-container">
                <div>
                    <img src={message_2} style={{height: '15vh', width: '45vw', paddingLeft: '8%'}}/>
                </div>
                <div>
                    <img src={message_3} style={{height: '7vh', width: '35vw', paddingLeft: '8%'}}/>
                </div>
                <div>
                    <button className="btn btn-warning btn-lg"
                            style={{fontSize: '1.0vw', width: '11vw', fontWeight: '800'}}
                            type="submit">SIGN UP</button>
                </div>
            </div>
        </div>

        <AboutEcoSikh/>

        <div className="bgimg-4">
            <div className="youtube-container">
                <iframe width="1000vh" height="700vh" src="https://www.youtube.com/embed/1fbNsC3jlFU" allowfullscreen></iframe>
            </div>
        </div>

        <Gallery/>

        <ContactUs/>

            {/*<div className="donation-container">*/}
                {/*<h1>Donation Information</h1><br></br>*/}
                {/*<div className="row">*/}
                    {/*<div className="col">*/}
                        {/*<h2>Pay by Cheque/NEFT</h2>*/}
                        {/*<h4>Account in India</h4>*/}
                        {/*<p>EcoSikh Charitable Society | A/c No: 039088700000014<br></br>*/}
                            {/*Bank Name: Yes Bank Ltd, Miller Ganj, Ludhiana<br></br>*/}
                            {/*IFSC Code: YESB0000390</p>*/}
                    {/*</div>*/}
                    {/*<div className="col">fslkj</div>*/}
                    {/*<div className="col">fslkj</div>*/}
                {/*</div>*/}
            {/*</div>*/}
    </div>


);

export default parallax;