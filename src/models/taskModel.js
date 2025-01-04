// Importing the mongoose library for schema creation and database interaction
import mongoose from "mongoose";

// Defining the schema for a Task document
const taskSchema = new mongoose.Schema(
    {
        // Title of the task, which is a required string
        title: { type: String, required: true },

        // Description of the task, which is also a required string
        description: { type: String, required: true },

        // Status of the task, which has a default value of "pending"
        // and is restricted to one of the specified values ("pending", "in-progress", "completed")
        status: { 
            type: String, 
            default: "pending", 
            enum: ["pending", "in-progress", "completed"] 
        },

        // Reference to the user who created the task
        // This is a foreign key pointing to the User model
        user: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User", 
            required: true 
        },
    },
    {
        // Enable automatic creation of `createdAt` and `updatedAt` fields
        timestamps: true
    }
);

// Creating a Task model from the schema if it doesn't already exist
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

// Exporting the Task model for use in other parts of the application
export default Task;
