// Importing the express module to create a router instance
import express from "express";

// Importing controller functions for user registration and login
import { registerUser, loginUser } from "../controllers/userController.js";

// Importing the authentication middleware
import authMiddleware from "../utils/auth.js";

// Creating a new router instance
const router = express.Router();

// Defining a POST route for user registration
// Calls the 'registerUser' function from the userController
router.post("/register", registerUser);

// Defining a POST route for user login
// Calls the 'loginUser' function from the userController
router.post("/login", loginUser);

// Exporting the router to use in other parts of the application
export default router;
