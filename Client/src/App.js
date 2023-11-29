import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Jobs from './components/Jobs';
import About from './components/About';
import Contact from './components/Contact';
import Postjob from './components/post-a-job';
import UpdateJob from './components/updateJob';
import Loginpage from './Sign-in/login-page';
import Register from './Sign-in/register';
import Forgetpasssword from './Sign-in/forget-password';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post-a-job" element={<Postjob />} />
        <Route path="/update/:id" element={<UpdateJob />} />
        <Route path="/login-page" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forgetpasssword />} />

        
      </Routes>
    </Router>
  );
}

export default App;
