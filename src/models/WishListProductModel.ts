import { sequelize } from "../config/db";
import { DataTypes } from "sequelize";
import { Wishlist } from "./WishListModel";
import { Product } from "./ProductModel";

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
        model: Product,
        key: "product_id",
      },
    },
  },
  {
    tableName: "wishlistProduct",
    timestamps: false,
  }
);
