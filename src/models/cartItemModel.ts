// Import sequelize refrence
import { sequelize } from "../config/db";

// Import DataTypes from sequelize module
import { DataTypes } from "sequelize";

// Import Cart model
import { Carts } from "./cartModel";

// Import Product model

// Define the CartItem model
export const CartItems = sequelize.define(
  "CartItem",
  {
    cartItem_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cartId: {
      type: DataTypes.INTEGER,
      references: {
        model: Carts,
        key: "cart_id",
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

