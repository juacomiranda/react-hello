import React from "react";

function Navbar(){
    return ( 
        <nav className="navbar navbar-expand-sm bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand ms-5 text-white" href="#">Pizzas</a>
          <div className="collapse navbar-collapse">
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