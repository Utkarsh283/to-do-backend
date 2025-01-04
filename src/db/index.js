// Importing the mongoose library for database connection and schema handling
import mongoose from "mongoose";

// Asynchronous function to establish a connection to MongoDB
const connectDB = async () => {
    try {
        // Attempting to connect to the MongoDB database using the URI from environment variables
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        // Log a success message with the host of the connected database
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        // Log an error message if the connection fails
        console.error("Error connecting to MongoDB", error);

        // Exit the process with a failure code (1) to indicate a critical error
        process.exit(1);
    }
};

// Exporting the connectDB function for use in other parts of the application
export default connectDB;
