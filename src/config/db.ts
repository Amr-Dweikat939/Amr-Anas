// Import sequelize module
import { Sequelize } from "sequelize";

// Load environment variables
require("dotenv").config();

// Initialize Sequelize with MySQL database credentials
export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    dialect: "mysql",
    logging: (...msg) => console.log(msg),
  }
);
