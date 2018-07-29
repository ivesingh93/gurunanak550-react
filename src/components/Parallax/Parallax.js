import React from 'react';
import image from '../../assets/image_1.jpg'
import './Parallax.css';
import message_2 from '../../assets/message_2.png';
import message_3 from '../../assets/message_3.png';
import Gallery from '../Gallery/Gallery';


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

        <div style={{color: '#777', backgroundColor: '#f6ffb1', alignItems: 'center', padding: '2vw 2vw', justifyContent: 'center' }}>
            <h3 style={{textAlign:'center', fontSize: '1vw'}}>About EcoSikh</h3>
            <p style={{fontSize: '1vw'}}>EcoSikh is a response from the Sikh community to the threats of climate change and the deterioration of the natural environment. Our organization arose as part of the Long Term Plans for Generational Change programme initiated in 2009 by the United Nations Development Programme (UNDP) and the Alliance of Religions and Conservation, UK (ARC) to help the world’s major religious traditions create long-term plan to improve their relationship with the environment and to guide their investment towards environmental protection.</p>
        </div>

        <div className="bgimg-4">
            <div className="donation-container">
                <iframe width="1165" height="655" src="https://www.youtube.com/embed/1fbNsC3jlFU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>


        <div style={{color: '#777', backgroundColor: '#77a6a3' }}>
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
            <Gallery/>

        </div>
        <div style={{color: '#fff', backgroundColor: '#292929', alignItems: 'center', padding: '2vw 2vw', justifyContent: 'center', textAlign: 'center' }}>
            <h3 style={{color: 'white'}}>Contact Us</h3>
            <div>
                <i class="fas fa-phone"></i> Phone: +91 84273 19268 
                &nbsp; &nbsp; | &nbsp; &nbsp;
                <i class="fas fa-envelope"></i> Email: info@ecosikh.org
            </div>

        </div>



    </div>


);

export default parallax;