import React from "react";
import { IconName } from "react-icons/fa";

function Navbar(){
    return ( 
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand ms-5 text-white" href="#">Pizzas</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
 }
 
 export default Navbar;