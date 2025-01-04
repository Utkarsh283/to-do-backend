// Importing the jsonwebtoken library to handle token verification
import jwt from "jsonwebtoken";

// Importing the User model to interact with the user data in the database
import User from "../models/userModel.js";

// Authentication middleware to verify the JWT token
const authMiddleware = async (req, res, next) => {
    // Extracting the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1];

    // If no token is found, return a 401 Unauthorized error
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        // Verifying the token with the secret key stored in environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Fetching the user from the database based on the decoded user ID
        // Excluding the password field from the user data
        req.user = await User.findById(decoded.userId).select("-password");

        // Proceeding to the next middleware or route handler
        next();
    } catch (error) {
        // If token verification fails, returning a 403 Forbidden error
        res.status(403).json({ message: "Invalid token" });
    }
};

// Exporting the middleware to be used in routes
export default authMiddleware;
