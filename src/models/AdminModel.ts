import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import bcrypt from "bcrypt";

// Create an ADMIN Schema
export const Admin = sequelize.define(
    'admin',
    {
        admin_id: {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensures email is unique
            validate: {
                isEmail: true, // Validates that the email format is correct
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                if (!value) {
                    console.error('Password is required.');
                    return;
                }
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(value, salt);
                this.setDataValue('password', hash); // Encrypt password before storing it
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'admin', // Default role for admins
            validate: {
                notEmpty: true,
            },
            //more roles will be added in the future
        },
    },
    {
        timestamps: true, // Enables createdAt and updatedAt automatically
    }
);

// Sync the model with the database
Admin.sync();
