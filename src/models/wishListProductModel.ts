// Import sequelize refrence
import { sequelize } from "../config/db";

// Import DataTypes from sequelize module
import { DataTypes } from "sequelize";

// Import Wishlist model
import { Wishlist } from "./wishListModel";

// Import product model

// Define the WishlistProduct model
export const WishlistProduct = sequelize.define(
  "WishlistProduct",
  {
    wishlistProductId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wishlistId: {
      type: DataTypes.INTEGER,
      references: {
        model: Wishlist,
        key: "wishlistId",
      },
    },
    // productId
  },
  {
    tableName: "wishlistProduct",
    timestamps: false,
  }
);
