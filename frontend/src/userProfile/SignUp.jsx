import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Use solid icons for Font Awesome
import { Link } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="signup">
        <form action="">
          <h2>Create Account</h2>
          <input type="text" placeholder='First and last name' />
          <input type="email" placeholder='Email' />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              style={{ height: '85%', width:'100%', fontSize: '16px', marginRight: '10px' }}
            />
            <div
              className="Password-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </div>
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
          />
          <button>Sign Up</button>
          <p>
            Already have an account? 
                <Link to='/login' className='lacc'>Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
