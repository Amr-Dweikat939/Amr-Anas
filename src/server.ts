import express from "express";
import { sequelize } from "./config/db";
import { connectToDB } from "./config/db";
import  createTables  from "./config/tables";

// Create a new Express application
const app = express();

// Start the server
app.listen(3000, async () => {
    console.log("Server is running on port 3000");
    try {
        await connectToDB();
        console.log("Database connection has been established successfully.");
        await createTables();
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});