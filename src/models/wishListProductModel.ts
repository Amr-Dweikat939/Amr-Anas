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
    wishlistProduct_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wishlistId: {
      type: DataTypes.INTEGER,
      references: {
        model: Wishlist,
        key: "wishlist_id",
      },
    },
    // productId
  },
  {
    tableName: "wishlistProduct",
    timestamps: false,
  }
);

