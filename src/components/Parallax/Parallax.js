import React from 'react';
import image from '../../assets/image_1.jpg'
import './Parallax.css';

const parallax = () => (
    
    <div>
        <div className="bgimg-1">
            <div className="caption">
                <h1 className="border" style={{backgroundColor: 'transparent', fontSize: '70px', color: 'white'}}>
                    550th Birth Anniversary of Guru Nanak in 2019
                </h1>
            </div>
        </div>

        <div style={{color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '50px 80px', textAlign: 'justify'}}>
            <h3 style={{textAlign: 'center'}}>Parallax Demo</h3>
            <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
        </div>

        <div className="bgimg-2">
            <div className="caption">
                <span className="border" style={{backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7'}}>LESS HEIGHT</span>
            </div>
        </div>


    </div>
        
    
);

export default parallax;