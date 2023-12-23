import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div>
      <div className="signup">
        <form action="">
          <h2>Log In</h2>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder="Password"/>
          <button type="submit">Continue</button>
          <p>Do not have an account?
          
          <Link to="/signup" className='lacc'>Sign Up Here</Link>
          </p>
    
    </form>
    </div>
    </div>
  );
}

export default Login
