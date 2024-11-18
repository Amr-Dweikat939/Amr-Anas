import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Create a CATEGORIES Schema
export const Category = sequelize.define(
    'categories',
    {
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensures category names are unique
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
    }
);

