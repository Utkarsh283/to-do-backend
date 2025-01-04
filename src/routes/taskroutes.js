// Importing the Express library to create a router instance for task-related routes
import express from "express";

// Importing the authentication middleware to protect routes
import authMiddleware from "../utils/auth.js";

// Importing task controller functions to handle the logic for each route
import {
  createTask,      // Controller for creating a new task
  getAllTasks,     // Controller for fetching all tasks of the authenticated user
  getTaskById,     // Controller for fetching a single task by its ID
  updateTask,      // Controller for updating an existing task
  deleteTask,      // Controller for deleting a task
} from "../controllers/taskController.js";

// Creating a router instance for defining routes
const router = express.Router();

// Route for creating a new task
// Protected by authMiddleware to ensure only authenticated users can create tasks
router.post("/tasks", authMiddleware, createTask);

// Route for retrieving all tasks of the authenticated user
// Protected by authMiddleware
router.get("/tasks", authMiddleware, getAllTasks);

// Route for retrieving a single task by its ID
// Protected by authMiddleware
router.get("/tasks/:id", authMiddleware, getTaskById);

// Route for updating an existing task by its ID
// Protected by authMiddleware
router.put("/tasks/:id", authMiddleware, updateTask);

// Route for deleting a task by its ID
// Protected by authMiddleware
router.delete("/tasks/:id", authMiddleware, deleteTask);

// Exporting the router to be used in other parts of the application
export default router;
