import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Create a PRODUCT_CATEGORIES Schema
export const ProductCategory = sequelize.define(
    'product_categories',
    {
        productCategory_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'products', // References the Products table
                key: 'product_id',
            },
            onDelete: 'CASCADE', // Deletes association if the product is deleted
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'categories', // References the Categories table
                key: 'category_id',
            },
            onDelete: 'CASCADE', // Deletes association if the category is deleted
        },
    },
    {
        timestamps: false, // Disables timestamps as this is a join table
    }
);

