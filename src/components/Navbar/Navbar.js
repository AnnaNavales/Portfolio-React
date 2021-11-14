import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar"


const Navbar = () => {
  return (

    <Nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#">Portfolio</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
            <li className="nav-item">
            <a className="nav-link" href="#">AnnaNavalesResume2021</a>
          </li>
          </li>

        </ul>

      </div>
    </Nav>



  )
};

export default Navbar;


