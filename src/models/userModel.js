// Importing the mongoose library for schema definition and database interaction
import mongoose from "mongoose";

// Defining the schema for a User document
const userSchema = new mongoose.Schema(
    {
        // Username of the user, which is a required string
        username: { type: String, required: true },

        // Email of the user, which is a required string and must be unique in the database
        email: { 
            type: String, 
            required: true, 
            unique: true // Ensures no two users can have the same email
        },

        // Password of the user, which is a required string
        // Typically, this will be stored as a hashed value for security
        password: { type: String, required: true },
    },
    {
        // Enable automatic creation of `createdAt` and `updatedAt` fields
        timestamps: true
    }
);

// Creating the User model from the schema
// This model allows interaction with the `users` collection in the database
const User = mongoose.model("User", userSchema);

// Exporting the User model for use in other parts of the application
export default User;

