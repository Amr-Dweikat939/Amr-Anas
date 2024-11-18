import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Create a PRODUCTS Schema
export const Products = sequelize.define(
    'products',
    {
        product_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, // Automatically generates a UUID
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true,
                min: 0,
            },
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 0,
            },
        },
        merchant_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'merchants', // Reference to Merchants table
                key: 'merchant_id',
            },
            onDelete: 'CASCADE', // Deletes products if the merchant is deleted
        },
        category_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'categories', // Reference to Categories table
                key: 'category_id',
            },
            onDelete: 'SET NULL', // Sets category_id to NULL if the category is deleted
        },
        brand_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        discount_percentage: {
            type: DataTypes.FLOAT,
            allowNull: true,
            validate: {
                min: 0,
                max: 100,
            },
        },
        product_image_url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
            },
        },
    },
    {
        timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
    }
);

