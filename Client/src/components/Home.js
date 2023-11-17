
import '../App.css';
import '../custom.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react';

function Home() {
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
    
          <section className="hero" style={{ backgroundImage: 'url(/homePageBackGround3.jpg)' }}>
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12">
          <div className="search-bar d-flex justify-content-center">
            <input type="text" id="locationInput" className="form-control" placeholder="Location" />
            <input type="text" id="nameInput" className="form-control"  placeholder="Search by name" />
  
            <select className="form-control" id="filterOptions">
              <option value="">All Categories</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </select>
            
            <select className="form-control" id="sortOptions">
              <option value="date">Date Posted</option>
              <option value="relevance">Relevance</option>
            </select>
            
            <button className="btn btn-primary"  type="button">
              Search
            </button>
          </div>
  
          <div id="suggestionsContainer" className="suggestions-container" style={{ display: 'none' }}>
            {/* Suggestions will be populated here */}
          </div>
        </div>
      </div>
    </div>
  </section>
  
    
  <section className="features py-5">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-3">
          <div className="feature-block">
            <img src="/search.png" alt="Search Millions of Jobs" className="mb-4" height="32" width="32" />
            <h4>Search Millions of Jobs</h4>
          </div>
        </div>
  
        <div className="col-md-3">
          <div className="feature-block">
            <img src="/users-alt.png" alt="Easy To Manage Jobs" className="mb-4" height="32" width="32" />
            <h4>Easy To Manage Jobs</h4>
          </div>
        </div>
  
        <div className="col-md-3">
          <div className="feature-block">
            <img src="/rocket-lunch.png" alt="Top Careers" className="mb-4" height="32" width="32" />
            <h4>Top Careers</h4>
          </div>
        </div>
  
        <div className="col-md-3">
          <div className="feature-block">
            <img src="/user.png" alt="Search Expert Candidates" className="mb-4" height="32" width="32" />
            <h4>Search Expert Candidates</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="job-categories py-5">
    <div className="container">
      <h2 className="text-center mb-5">Browse Top Categories</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card border-0 text-center">
            <img src="/idea.gif" alt="Design & Creative" className="card-img-top mx-auto d-block mt-4" style={{ width: 60 }} />
            <div className="card-body">
              <h5 className="card-title">Design & Creative</h5>
              <p className="card-text">(653)</p>
            </div>
          </div>
        </div>
  
        <div class="col-md-3 mb-4">
              <div class="card border-0 text-center">
                <img src="/money-bag.gif" alt="Sales & Marketing" class="card-img-top mx-auto d-block mt-4" style={{ width: 60 }}/>
                <div class="card-body">
                  <h5 class="card-title">Sales & Marketing</h5>
                  <p class="card-text">(658)</p>
                </div>
              </div>
            </div>
  
            <div class="col-md-3 mb-4">
              <div class="card border-0 text-center">
                <img src="/computer.gif" alt="Mobile Application" class="card-img-top mx-auto d-block mt-4" style={{ width: 60 }}/>
                <div class="card-body">
                  <h5 class="card-title">Mobile Application</h5>
                  <p class="card-text">(658)</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card border-0 text-center">
                <img src="/connection.gif" alt="Information Technology" class="card-img-top mx-auto d-block mt-4" style={{ width: 60 }}/>
                <div class="card-body">
                  <h5 class="card-title">Information Technology</h5>
                  <p class="card-text">(658)</p>
                </div>
              </div>
            </div>
            
  
            <div class="col-md-3 mb-4">
              <div class="card border-0 text-center">
                <img src="/home.gif" alt="Real Estate" class="card-img-top mx-auto d-block mt-4" style={{ width: 60 }}/>
                <div class="card-body">
                  <h5 class="card-title">Real Estate</h5>
                  <p class="card-text">(658)</p>
                </div>
              </div>
            </div>
  
        <div className="col-md-3 mb-4">
          <div className="card border-0 text-center">
            <img src="/notebook.gif" alt="Content Writer" className="card-img-top mx-auto d-block mt-4" style={{ width: 60 }} />
            <div className="card-body">
              <h5 className="card-title">Content Writer</h5>
              <p className="card-text">(658)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  <section className="resume-upload-cta" style={{ background: 'url("/cvPic.jpg") no-repeat center center', backgroundSize: 'cover', color: '#fff' }}>
    <div className="container">
      <div className="row">
        <div className="col text-center py-5">
          <h2>Make a Difference with Your Online Resume!</h2>
          <button className="btn btn-light mt-3">UPLOAD YOUR CV</button>
        </div>
      </div>
    </div>
  </section>
  
  
  <section className="newsletter py-5" style={{ backgroundColor: '#acabb9', padding: '20px' }}>
    <div className="container">
      <div className="row">
        <div className="col text-center text-white">
          <h2>Subscribe to our Newsletter</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className="newsletter-form mt-4">
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter email address" aria-label="Enter email address" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-orange" type="button" id="button-addon2">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
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

export default Home;
