const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// /api/auth/register
router.post("/register", async (req, res) => {
try {
    const { username, email, password } = req.body;

    // Kontrollo nëse email ekziston
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }

    // Krijo user të ri
    const newUser = await User.create(username, email, password);

    // Krijo JWT token
    const token = jwt.sign(
    { id: newUser.id, email: newUser.email },
        process.env.JWT_SECRET,
    { expiresIn: "1h" }
    );

    res.status(201).json({ token, user: newUser });
} catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
}
});

// /api/auth/login
router.post("/login", async (req, res) => {
try {
    const { email, password } = req.body;

    // Gjej user nga email
    const user = await User.findByEmail(email);
    if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
    }

    // Kontrollo password-in
    const isMatch = await User.comparePassword(password, user.password);
    if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
    }

    // Krijo JWT token
    const token = jwt.sign(
    { id: user.id, email: user.email },
        process.env.JWT_SECRET,
    { expiresIn: "1h" }
    );

    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
} catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
}
});

module.exports = router;