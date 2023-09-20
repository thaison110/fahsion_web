const express = require("express");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const config = require("../config");
const User = require("../models/User");

const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Error registering user",
            error: error.message,
        });
    }
});

// Login user
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Create and return a JWT token
        const token = "Pass Login";
        // const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
        //     expiresIn: "1h",
        // });

        res.status(200).json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({
            message: "Error logging in",
            error: error.message,
        });
    }
});

module.exports = router;
