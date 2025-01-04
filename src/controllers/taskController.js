// Importing the Task model to interact with the task collection in the database
import Task from "../models/taskModel.js";

// Function to create a new task
export const createTask = async (req, res) => {
    const { title, description } = req.body; // Extracting task details from the request body

    try {
        // Creating a new task and associating it with the logged-in user
        const task = await Task.create({ title, description, user: req.user._id });

        // Respond with the created task
        res.status(201).json(task);
    } catch (error) {
        // Error handling for task creation failure
        res.status(500).json({ message: "Failed to create task", error: error.message });
    }
};

// Function to get all tasks for the logged-in user
export const getAllTasks = async (req, res) => {
    try {
        // Fetching tasks that belong to the logged-in user
        const tasks = await Task.find({ user: req.user._id });

        // Respond with the list of tasks
        res.json(tasks);
    } catch (error) {
        // Error handling for failure in fetching tasks
        res.status(500).json({ message: "Failed to fetch tasks", error: error.message });
    }
};

// Function to get a specific task by its ID
export const getTaskById = async (req, res) => {
    const { id } = req.params; // Extracting task ID from request parameters

    try {
        // Fetching the task by its ID
        const task = await Task.findById(id);

        // If the task is not found, respond with a 404 status
        if (!task) return res.status(404).json({ message: "Task not found" });

        // Respond with the fetched task
        res.json(task);
    } catch (error) {
        // Error handling for failure in fetching the task
        res.status(500).json({ message: "Failed to fetch task", error: error.message });
    }
};

// Function to update a task by its ID
export const updateTask = async (req, res) => {
    const { id } = req.params; // Extracting task ID from request parameters
    const { title, description } = req.body; // Extracting updated details from the request body

    try {
        // Updating the task by its ID and returning the updated document
        const task = await Task.findByIdAndUpdate(id, { title, description }, { new: true });

        // If the task is not found, respond with a 404 status
        if (!task) return res.status(404).json({ message: "Task not found" });

        // Respond with the updated task
        res.json(task);
    } catch (error) {
        // Error handling for failure in updating the task
        res.status(500).json({ message: "Failed to update task", error: error.message });
    }
};

// Function to delete a task by its ID
export const deleteTask = async (req, res) => {
    const { id } = req.params; // Extracting task ID from request parameters

    // Validation: Check if task ID is provided
    if (!id) return res.status(400).json({ message: "Task id is required" });

    try {
        // Fetching the task by its ID
        const task = await Task.findById(id);

        // If the task is not found, respond with a 404 status
        if (!task) return res.status(404).json({ message: "Task not found" });

        // Authorization: Ensure the logged-in user owns the task
        if (!task.user.equals(req.user._id)) return res.status(403).json({ message: "Unauthorized to delete task" });

        // Deleting the task
        await Task.findByIdAndDelete(id);

        // Respond with a success message
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        // Specific error handling for invalid task IDs
        if (error.name === "CastError") return res.status(400).json({ message: "Invalid task id" });

        // General error handling
        console.error("Error deleting task", error);
        res.status(500).json({ message: "Failed to delete task", error: error.message });
    }
};
