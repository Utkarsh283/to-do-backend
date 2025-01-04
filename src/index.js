// Importing the dotenv module to load environment variables from a .env file
import dotenv from "dotenv";

// Importing the Express app and database connection utility
import app from "./app.js";
import connectDB from "./db/index.js";

// Configuring dotenv to load environment variables
dotenv.config();

// Setting the port from environment variables or defaulting to 8000
const PORT = process.env.PORT || 8000;

// Connecting to the database
connectDB().then(() => {
    // Once the database connection is established, start the Express server
    app.listen(PORT, () => {
        // Logging the server's running port to the console
        console.log(`Server running on port ${PORT}`);
    });
});
