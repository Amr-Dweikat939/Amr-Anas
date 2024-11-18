// Import sequelize refrence
import { sequelize } from "../config/db";

// Import DataTypes from sequelize module
import { DataTypes } from "sequelize";

// Import Cart model
import { Carts } from "./cartModel";

// Import Product model
import { Products } from "./ProductModel";

// Define the CartItem model
export const CartItem = sequelize.define(
  "CartItem",
  {
    cartItem_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Carts,
        key: "cart_id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Products,
        key: "product_id",
      },
    },
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
