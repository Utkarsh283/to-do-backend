// Importing required modules for setting up the server
import express from "express";
import cors from "cors";

// Importing routes for tasks and users
import taskRoutes from "./routes/taskroutes.js";
import userRoutes from "./routes/userRoutes.js";

// Creating an Express application instance
const app = express();

// Enabling Cross-Origin Resource Sharing (CORS)
// The 'origin' allows requests from a specific domain (set in environment variables)
// The 'credentials' flag allows cookies to be sent along with requests
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Defining route handlers for users and tasks
// Routes for user-related endpoints will be prefixed with "/users"
app.use("/users", userRoutes);
// Routes for task-related endpoints will not have any prefix (empty string)
app.use("", taskRoutes);

// Global error handler for the application
// If an error occurs, it returns a 500 server error response with the error message
app.use((err, req, res, next) => {
    res.status(500).json({ message: "Server error", error: err.message });
});

// Exporting the Express app to use in the server setup (e.g., in index.js)
export default app;
