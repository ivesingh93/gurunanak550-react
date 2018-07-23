import React from 'react';
import Logo from '../../Logo/Logo';
import './NavBar.css';

const navbar = (props) => (
  <div className="Nav-settings">
    <nav class="Nav-settings navbar navbar-expand-md fixed-top">
      <a class="navbar-brand" href="#"><Logo/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </nav>
  </div>
  // <div className="Nav-settings">
  //   <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 navbar-fixed-top mb-3 box-shadow">
  //     <h5 className="mr-md-auto"><Logo/></h5>
  //     <div class="inner">
  //       <nav class="nav nav-masthead justify-content-center">
  //         <a className="nav-link active" href="#">About us</a>
  //         <a className="nav-link" href="#">Resources</a>
  //         <a className="nav-link" href="#">Support</a>
  //         <a className="nav-link" href="#">Pricing</a>
  //       </nav>
  //     </div>
  //     &nbsp;&nbsp;
  //     <a className="btn btn-outline-success" href="#">Sign up</a>
  //   </div>
  // </div>

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