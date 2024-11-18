import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Create a CATEGORIES Schema
export const Categories = sequelize.define(
    'categories',
    {
        category_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, // Automatically generates a UUID
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
