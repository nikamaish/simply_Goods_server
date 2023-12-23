import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check if the confirm password matches the new password
    setPasswordMatch(confirmPassword === newPassword || confirmPassword === '');
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Check if the confirm password matches the password
    setPasswordMatch(password === newConfirmPassword || password === '');
  };

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
              style={{ height: '85%', width: '100%', fontSize: '16px', marginRight: '10px' }}
              onChange={handlePasswordChange}
              value={password}
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
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
          />
          {!passwordMatch && password !== '' && confirmPassword !== '' && (
            <p style={{ color: 'red' }}>Passwords do not match. Please check again.</p>
          )}
          <button disabled={!passwordMatch}>Sign Up</button>
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
