const router = require('express').Router();
const Customer = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    try {
        const { fullname, email, password, passwordConfirm } = req.body;

        if (!fullname || !email || !password || !passwordConfirm) {
            return res.status(400).json({ errorMessage: "Please enter all required fields." });
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newCustomer = new Customer({
            fullname,
            email,
            passwordHash,
        });

        const savedCustomer = await newCustomer.save();

        const token = jwt.sign({
            user: savedCustomer._id
        }, process.env.JWT_SECRET);

        console.log(token);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });

        res.status(201).json(savedCustomer); // Respond with the saved user data or a success message
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;
