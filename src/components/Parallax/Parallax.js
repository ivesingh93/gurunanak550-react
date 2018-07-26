import React from 'react';
import image from '../../assets/image_1.jpg'
import './Parallax.css';
import message_2 from '../../assets/message_2.png';
import message_3 from '../../assets/message_3.png';
const parallax = () => (
    
    <div>
        <div className="bgimg-1">
            <div class="flex-container">
                <div>
                    <img src={message_2} style={{height: '15vh', width: '45vw', paddingLeft: '8%'}}/>
                </div>
                <div>
                    <img src={message_3} style={{height: '10vh', width: '45vw', paddingLeft: '8%'}}/>
                </div>
                <div>
                    <button className="btn btn-warning btn-lg" 
                     style={{fontSize: '2vw', width: '15vw', fontWeight: '900', paddingLeft: '10%'}}
                    type="submit">SIGN UP</button>
                </div>
            </div>
        </div>

        <div style={{color: '#777', backgroundColor: '#f6ffb1', alignItems: 'center', padding: '2vw 2vw', justifyContent: 'center' }}>
            <h3 style={{textAlign:'center', fontSize: '2vw'}}>About EcoSikh</h3>
            <p style={{fontSize: '1.5vw'}}>EcoSikh is a response from the Sikh community to the threats of climate change and the deterioration of the natural environment. Our organization arose as part of the Long Term Plans for Generational Change programme initiated in 2009 by the United Nations Development Programme (UNDP) and the Alliance of Religions and Conservation, UK (ARC) to help the world’s major religious traditions create long-term plan to improve their relationship with the environment and to guide their investment towards environmental protection.</p>
        </div>

        <div className="bgimg-2">
        </div>


    </div>
        
    
);

export default parallax;