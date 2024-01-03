const express = require('express');
const router = express.Router();
const session = require('express-session');
const cookieSession = require('cookie-session');
const Customer = require('../models/userModel');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
require('dotenv').config();

const generateRandomString = (length) => {
    return crypto.randomBytes(length).toString('hex');
  };


  
const sessionKey = generateRandomString(32); // You can adjust the length based on your security requirements

// console.log(sessionKey);



router.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: true,
        httpOnly: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      },
    })
  );
  

  router.post('/register', async (req, res) => {
    try {
      const { fullname, email, password, passwordConfirm } = req.body;
  
      if (!fullname || !email || !password || !passwordConfirm) {
        return res.status(400).json({ errorMessage: 'Please enter all required fields.' });
      }
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newCustomer = new Customer({
        fullname,
        email,
        passwordHash
      });
  
      const savedCustomer = await newCustomer.save();
  
      req.session.user = { _id: savedCustomer._id, fullname: savedCustomer.fullname, email: savedCustomer.email };
  
      res.status(201).json(savedCustomer);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ errorMessage: 'Please enter both email and password.' });
      }
  
      const customer = await Customer.findOne({ email });
  
      if (!customer || !(await bcrypt.compare(password, customer.passwordHash))) {
        return res.status(401).json({ errorMessage: 'Invalid credentials.' });
      }
  
      req.session.user = { _id: customer._id, fullname: customer.fullname, email: customer.email };
  
      res.status(200).json({ message: 'Login successful' });
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
  
  router.get('/logout', (req, res) => {
    try {
      req.session = null; // Clear the session data
      res.status(200).json({ message: 'Logout successful' });
      console.log('User session cleared');
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });
  

module.exports = router;
