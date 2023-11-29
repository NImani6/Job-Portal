import React, { useState } from 'react';  // Import useState

import '../sign-in.css';
import '../custom.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from '../partials/header.js';
import Footer from '../partials/footer.js';

function Register() {  // Change function name to start with an uppercase letter

    const [accountType, setAccountType] = useState('');

    const handleRadioChange = (type) => {
      setAccountType(type);
    };

  return (
    <div>
      <Header />
      
      <div className="text-center m-5-auto">
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form action="/home">
          <p>
            <label>Username</label><br/>
            <input type="text" name="first_name" required />
          </p>
          <p>
            <label>Email address</label><br/>
            <input type="email" name="email" required />
          </p>
          <p>
            <label>Password</label><br/>
            <input type="password" name="password" required />
          </p>

          <p>
        <label>
          Job Seeker
          <input
            type='radio'
            name='accountType'
            value='jobSeeker'
            checked={accountType === 'jobSeeker'}
            onChange={() => handleRadioChange('jobSeeker')}
            required
          />
        </label>
      </p>

      <p>
        <label>
          Recruiter
          <input
            type='radio'
            name='accountType'
            value='recruiter'
            checked={accountType === 'recruiter'}
            onChange={() => handleRadioChange('recruiter')}
            required
          />
        </label>
      </p>

        
          <p>
            <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
          </p>
          <p>
            <button id="sub_btn" type="submit">Register</button>
          </p>
        </form>
        <footer>
          <p><Link to="/">Back to Homepage</Link>.</p>
        </footer>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
