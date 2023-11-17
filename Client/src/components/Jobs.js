import '../App.css';
import '../custom.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Jobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await axios.get('http://localhost:9000/');
          setJobs(response.data);
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };
  
      fetchJobs();
    }, []);
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:9000/api/delete/${id}`);
        const response = await axios.get('http://localhost:9000/');
        setJobs(response.data);
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    };

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
            <li className="nav-item"><a className="nav-link" href="">Jobs</a></li>
            <li className="nav-item"><a className="nav-link" href="">Contact</a></li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-white" href="/post-a-job">Post a Job</a>
            </li>
            <li className="nav-item"><a className="nav-link" href=""><b><u>Sign in</u></b></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <section className="job-list-section py-5">
        <div className="container">
          <h1 className="text-center">Job Listings</h1>
          <div className="row">
            {jobs.map((job) => (
              <div className="col-md-4 mb-4" key={job._id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{job.jobTitle}</h5>
                    <p className="card-text">Company: {job.companyName}</p>
                    <p className="card-text">Salary: {job.salary}</p>
                    <p className='card-text'>Description: {job.jobDescription}</p>
                    <p className='card-text'>Location: {job.jobLocation}</p>

                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => handleDelete(job._id)}
                    >
                      Delete
                    </button>

                    <Link
                      to={`/update/${job._id}`}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




  <footer className="text-light bg-dark">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-3">
          <h5>About</h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
  
          <a href="#" className="text-light mr-2"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          <a href="#" className="text-light mr-2"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
          <a href="#" className="text-light mr-2"><i className="fab fa-instagram" aria-hidden="true"></i></a>
        </div>
        <div className="col-md-3">
          <h5>Employers</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">How it works</a></li>
            <li><a href="#" className="text-light">Register</a></li>
            <li><a href="#" className="text-light">Post a Job</a></li>
            <li><a href="#" className="text-light">Advance Skill Search</a></li>
            <li><a href="#" className="text-light">Recruiting Service</a></li>
            <li><a href="#" className="text-light">Blog</a></li>
            <li><a href="#" className="text-light">Faq</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Workers</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">How it works</a></li>
            <li><a href="#" className="text-light">Register</a></li>
            <li><a href="#" className="text-light">Post Your Skills</a></li>
            <li><a href="#" className="text-light">Job Search</a></li>
            <li><a href="#" className="text-light">Employer Search</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Have a Questions?</h5>
          <ul className="list-unstyled">
            <li className="text-light">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li className="text-light">
              <i className="fas fa-phone" aria-hidden="true"></i>
              +2 392 3929 210
            </li>
            <li className="text-light">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>



  </div>

  );

}

export default Jobs;
