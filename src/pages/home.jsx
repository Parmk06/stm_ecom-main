import React, { useState } from "react";
import "../assets/home.css";
import {Link} from 'react-router-dom'
import axios from "axios";


function Home(){
    return (
   <header className="container">
      <div className="row">
        <div className="col-6">
          {/* Left side */}
          <div className="row">
            <div className="col">
              {/* Logo */}
              <img src="logo.png" alt="Logo" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* Link */}
              <a href="/">Societe de transport de Montreal</a>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* Right side */}
          <div className="row">
            <div className="col">
              {/* Navigation Bar */}
              <nav>
                <a href="/">Contact us</a> |
                <a href="/">Jobs</a> |
                <a href="/">Business Zone</a> |
                <a href="/">Press room</a> |
                <a href="/">Francais</a>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* Search Bar */}
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* Logo with Link */}
              <a href="/">
                <img src="logo.png" alt="Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Home 