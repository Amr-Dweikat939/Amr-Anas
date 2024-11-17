// Import sequelize module
import { Sequelize } from "sequelize";

// Load environment variables
require("dotenv").config();

// Initialize Sequelize with MySQL database credentials
export const sequelize = new Sequelize(String(process.env.DB_URL), {
  logging: false,
});
