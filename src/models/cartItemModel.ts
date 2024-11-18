// Import sequelize refrence
import { sequelize } from "../config/db";

// Import DataTypes from sequelize module
import { DataTypes } from "sequelize";

// Import Cart model
import { Cart } from "./cartModel";

// Import Product model

// Define the CartItem model
export const CartItem = sequelize.define(
  "CartItem",
  {
    cartItemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cartId: {
      type: DataTypes.INTEGER,
      references: {
        model: Cart,
        key: "cartId",
      },
    },
    // productId
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "CartItem",
    timestamps: false,
  }
);
