import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Create a COLORS Schema
export const Colors = sequelize.define(
    'colors',
    {
        color_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, // Automatically generates a UUID
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensures color names are unique
            validate: {
                notEmpty: true,
            },
        },
        hexadecimal_value: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensures hex values are unique
            validate: {
                is: /^#[0-9A-Fa-f]{6}$/, // Validates a proper hexadecimal color code
            },
        },
    },
    {
        timestamps: false, // Disables timestamps for simplicity
    }
);
