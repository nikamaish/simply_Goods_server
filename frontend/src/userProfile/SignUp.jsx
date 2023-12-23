import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  // This is the password state which will be used to store the password value entered by the user. 
  // first it is empty after that it stores first password that is entered by user.
  
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);


  const handlePasswordChange = (e) => {
    // Extract the password entered by the user from the event object
    const password = e.target.value;
  
    // Update the 'password' state with the entered password
    setPassword(password); // old password

  };
  

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Check if the confirm password matches the password
    setPasswordMatch(password === newConfirmPassword || password === ''); // new password and it is confirmed
  };

  return (
    <div>
      <div className="signup">
        <form action="">
          <h2>Create Account</h2>
          <input type="text" placeholder='First and last name' />
          <input type="email" placeholder='Email' />


          <div className="password-container">
            {/* This div element is used as a container to group the password input field and the visibility toggle icon/button. */}
            <input
            // This is an <input> element of type "password" or "text" based on the showPassword state.
            // here, the type attribute is set to a JavaScript expression which will be evaluated at runtime.
            // here we use ternary operator to set the type attribute to "password" if showPassword is false, otherwise set it to "text".
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              style={{ height: '85%', width: '100%', fontSize: '16px', marginRight: '10px' }}
              onChange={handlePasswordChange}
              value={password}/>


<div className="Password-icon" onClick={() => setShowPassword(!showPassword)}>
    {/* click then opposite of initial will display  */}
<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
{/* The icon prop is set based on the showPassword state. If showPassword is true, it uses the "faEyeSlash" icon; otherwise, it uses the "faEye" icon. */}
</div>

          </div>


          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}/>
          
{/* !passwordMatch:
This part checks if the passwordMatch state is false. If the passwords do not match, passwordMatch is set to false, and this condition becomes true.
password !== '':
This part checks if the password state is not an empty string. It ensures that the user has entered a password in the "Password" input field.
confirmPassword !== '':
This part checks if the confirmPassword state is not an empty string. It ensures that the user has entered a confirmation password in the "Confirm Password" input field. */}

          {!passwordMatch && password !== '' && confirmPassword !== '' &&
          (<p style={{ color: 'red' }}>Passwords do not match. Please check again.</p>)}

          <button disabled={!passwordMatch}>Sign Up</button>
          {/* If passwordMatch is false, the disabled attribute is set to true, which means the button is disabled. */}
          {/* If passwordMatch is true (meaning the passwords match), the disabled attribute is set to false, and the button is not disabled. */}

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
