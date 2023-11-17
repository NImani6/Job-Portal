import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../updatejob.css';
import { useParams } from 'react-router-dom';

function UpdateJob() {
    const { id } = useParams();
    const [job, setJob] = useState({
      jobTitle: '',
      companyName: '',
      jobDescription: '',
      salary: '',
      jobLocation: '',
    });
  
    const [updateMessage, setUpdateMessage] = useState('');
  
    useEffect(() => {
      const fetchJob = async () => {
        try {
          const response = await axios.get(`http://localhost:9000/${id}`);
          setJob(response.data);
        } catch (error) {
          console.error('Error fetching job for update:', error);
        }
      };
  
      fetchJob();
    }, [id]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setJob({ ...job, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.put(`http://localhost:9000/update/${id}`, job);
        setUpdateMessage('Job updated successfully!');
      } catch (error) {
        console.error('Error updating job:', error);
        setUpdateMessage('Error updating job. Please try again.');
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
            <li className="nav-item"><a className="nav-link" href="/Jobs">Jobs</a></li>
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

        <h2>Update Job</h2>
      {updateMessage && <p>{updateMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input type="text" name="jobTitle" value={job.jobTitle} onChange={handleInputChange} />
        </label>
        <label>
          Company Name:
          <input type="text" name="companyName" value={job.companyName} onChange={handleInputChange} />
        </label>
        <label>
          Job Description:
          <input type="text" name="jobDescription" value={job.jobDescription} onChange={handleInputChange} />
        </label>
        <label>
          Salary:
          <input type="text" name="salary" value={job.salary} onChange={handleInputChange} />
        </label>
        <label>
          Location:
          <input type="text" name="jobLocation" value={job.jobLocation} onChange={handleInputChange} />
        </label>
        {/* Add similar input fields for other job properties */}
        <button type="submit">Update Job</button>
      </form>

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

export default UpdateJob;
