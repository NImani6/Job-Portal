import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function header() {
    return (
        <div>
            <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/"> <img src="/logo4.png" height="45" width="45" alt=""/>CodeCraze</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/About">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/Jobs">Jobs</a></li>
            <li className="nav-item"><a className="nav-link" href="/Contact">Contact</a></li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-white" href="/post-a-job">Post a Job</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="/login-page"><b><u>Sign in</u></b></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
        </div>
        );
    }
    
    export default header;