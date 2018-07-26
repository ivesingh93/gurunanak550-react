import React from 'react';
import gurunanak550logo from '../../../assets/logo_sm.png';
import './NavBar.css';

const navbar = (props) => (
      <div className="Nav-settings" >
        <div className="d-flex flex-column flex-md-row align-items-center p-3  navbar-fixed-top mb-1">
          <img src={gurunanak550logo} alt="gurunanak550" style={{width: '150px', height: '100px'}}/>
          <div>
            <nav className="nav nav-masthead ">
              <a className="nav-link active" style={{fontSize: '20px'}} href="#">Home</a>
              <a className="nav-link" style={{fontSize: '20px'}} href="#">About EcoSikh</a>
              <a className="nav-link" style={{fontSize: '20px'}} href="#">Tree Tutorials</a>
              <a className="nav-link" style={{fontSize: '20px'}} href="#">Resources</a>
              <a className="nav-link" style={{fontSize: '20px'}} href="#">Contact Us</a>
              <a className="nav-link" style={{fontSize: '20px'}} href="#"></a>
              <div>
                <a className="btn btn-outline-success" style={{fontSize: '20px', width: '200px'}} href="#">LOG IN</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="btn btn-outline-success" style={{fontSize: '20px', width: '200px'}} href="#">DONATE</a>
              </div>
              
            </nav>
            
          </div>
        </div>
      </div>
  
  


  // <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  //     <header class="masthead mb-auto">
  //       <div class="inner">
  //         <h3 class="masthead-brand">Cover</h3>
  //         <nav class="nav nav-masthead justify-content-center">
  //           <a class="nav-link active" href="#">Home</a>
  //           <a class="nav-link" href="#">Features</a>
  //           <a class="nav-link" href="#">Contact</a>
  //         </nav>
  //       </div>
  //     </header>
  // </div>
    
);

export default navbar;