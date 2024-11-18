// Import sequelize refrence
import { sequelize } from "../config/db";

// Import DataTypes from sequelize module
import { DataTypes } from "sequelize";

// Import Wishlist model
import { Wishlist } from "./wishListModel";

// Import Product model
import { Products } from "./ProductModel";

// Define the WishlistProduct model
export const WishlistProduct = sequelize.define(
  "WishlistProduct",
  {
    wishlistProduct_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wishlist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Wishlist,
        key: "wishlist_id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Products,
        key: "product_id",
      },
    },
  },
  {
    tableName: "wishlistProduct",
    timestamps: false,
  }
);
