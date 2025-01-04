// Importing the User model to interact with the user collection in the database
import User from "../models/userModel.js";

// Importing libraries for JWT token generation and password hashing
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Function to generate a JWT token for a given user ID, valid for 1 hour
const generateToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });

// Function to handle user registration
export const registerUser = async (req, res) => {
    // Extracting data from the request body
    const { username, email, password } = req.body;

    // Validation: Check if all required fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Please fill in all required fields" });
    }

    try {
        // Check if a user with the same email already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the user's password for secure storage
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user record in the database
        const user = await User.create({ username, email, password: hashedPassword });

        // Check if the user creation was successful
        if (!user) {
            return res.status(500).json({ message: "Failed to register user", error: "Internal server error" });
        }

        // Respond with the user ID and a JWT token
        res.status(201).json({ _id: user._id, token: generateToken(user._id) });
    } catch (error) {
        // Log the error and send an error response
        console.error("Error registering user", error);
        res.status(500).json({ message: "Registration failed", error: error.message });
    }
};

// Function to handle user login
export const loginUser = async (req, res) => {
    // Extracting data from the request body
    const { email, password } = req.body;

    // Validation: Check if both email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: "Please provide both email and password" });
    }

    try {
        // Find a user with the provided email
        const user = await User.findOne({ email });

        // If no user is found, respond with an error
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // If the passwords don't match, respond with an error
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Respond with the user ID and a JWT token
        res.json({ _id: user._id, token: generateToken(user._id) });
    } catch (error) {
        // Log the error and send an error response
        console.error("Error logging in user", error);
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};
