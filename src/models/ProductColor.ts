import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Create a PRODUCT_COLORS Schema
export const ProductColor = sequelize.define(
    'product_colors',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, // Automatically generates a UUID
        },
        product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'products', // References the Products table
                key: 'product_id',
            },
            onDelete: 'CASCADE', // Deletes the association if the product is deleted
        },
        color_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'colors', // References the Colors table
                key: 'color_id',
            },
            onDelete: 'CASCADE', // Deletes the association if the color is deleted
        },
    },
    {
        timestamps: false, // Disables timestamps as this is a join table
    }
);
