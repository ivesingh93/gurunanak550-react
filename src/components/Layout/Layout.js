import React from 'react';
import NavBar from '../Navigation/NavBar/NavBar';
import Parallax from '../Parallax/Parallax';

const layout = ( props ) => (
    <React.Fragment>
        <div>
            <NavBar />
            <Parallax />
        </div>
        {/* <main>
            {props.children}
        </main> */}
    </React.Fragment>
);

export default layout;