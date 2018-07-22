import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar/NavBar';

const layout = ( props ) => (
    <React.Fragment>
        <div>
            <NavBar />            
        </div>
        <main>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;