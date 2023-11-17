import React, { useState } from 'react';
import axios from 'axios';

function Postjob() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    salary: '',
    companyName: '',
    jobType: '',
    jobLocation: '',
    jobDescription: '',
  });

  const backendURL = 'http://localhost:9000'; // Replace with your backend server URL

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await axios.post(`${backendURL}/add`, formData);

      console.log('Job posted:', response.data);

      // Clear form data or perform any other necessary actions
      setFormData({
        jobTitle: '',
        salary: '',
        companyName: '',
        jobType: '',
        jobLocation: '',
        jobDescription: '',
      });
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            {' '}
            <img src="/logo4.png" height="45" width="45" alt="" />CodeCraze
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Jobs">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary text-white" href="/post-a-job">
                  Post a Job
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <b>
                    <u>Sign in</u>
                  </b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="post-job-section py-5">
        <div className="container">
          <h1 className="text-center">Post a Job</h1>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form id="postJobForm" onSubmit={handleFormSubmit}>
                <div className="form-group mt-3">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="e.g. Professional UI/UX Designer"
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="text"
                    className="form-control"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g. 80-90k/year"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyName">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Facebook, Inc."
                  />
                </div>

                <fieldset className="form-group">
                  <legend>Job Type</legend>
                  {/* ... (rest of your job type code) */}
                </fieldset>

                <div className="form-group">
                  <label htmlFor="jobLocation">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobLocation"
                    name="jobLocation"
                    value={formData.jobLocation}
                    onChange={handleInputChange}
                    placeholder="Western City, UK"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="jobDescription">Job Description</label>
                  <textarea
                    className="form-control"
                    id="jobDescription"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Describe the role and responsibilities"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-light bg-dark">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <h5>About</h5>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>

              <a href="#" className="text-light mr-2">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" className="text-light mr-2">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="#" className="text-light mr-2">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-md-3">
              <h5>Employers</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Advance Skill Search
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Recruiting Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Faq
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Workers</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Post Your Skills
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Job Search
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Employer Search
                  </a>
                </li>
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

export default Postjob;