// Import sequelize refrence
import { sequelize } from "../config/db";

// Import DataTypes from sequelize module
import { DataTypes } from "sequelize";

// Import User model
import { User } from "./userModel";

// Import Product model
import { Products } from "./ProductModel";

// Define the Rating model
export const Rating = sequelize.define(
  "Rating",
  {
    rating_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Products,
        key: "product_id",
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "rating",
    timestamps: false,
  }
);
