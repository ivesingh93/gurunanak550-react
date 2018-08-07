import React from 'react';
import './Parallax.css';
import message_2 from '../../assets/message_2.png';
import message_3 from '../../assets/message_3.png';
import Gallery from '../Gallery/Gallery';
import AboutEcoSikh from '../AboutEcoSikh/AboutEcoSikh';
import Footer from '../Footer/Footer';

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
                    <button className="btn btn-primary btn-lg"
                            style={{fontSize: '1.0vw', width: '11vw', fontWeight: '800'}}
                            type="submit">SIGN UP</button>
                </div>
            </div>
        </div>

        <AboutEcoSikh/>

        <div className="bgimg-4">
            <div className="video-container">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/1fbNsC3jlFU" frameBorder="0"></iframe>
            </div>
        </div>

        <Gallery/>

        <Footer/>

    </div>


);

export default parallax;