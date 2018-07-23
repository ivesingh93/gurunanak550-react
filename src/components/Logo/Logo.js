import React from 'react';
import gurunanak550logo from '../../assets/logo_sm.png'
import classes from './Logo.css';

const logo = () => (

    <div className={classes.Logo}>
        <img src={gurunanak550logo} alt="gurunanak550" style={{width: '120px', height: '80px', }}/>
    </div>

);

export default logo;