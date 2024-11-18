// Import User model
import { User } from "./userModel";

// Import Wishlist model
import { Wishlist } from "./wishListModel";

// Import Cart model
import { Cart } from "./cartModel";

// Import Rating model
import { Rating } from "./ratingModel";

// Import WishlistProduct model
import { WishlistProduct } from "./wishListProductModel";

// Import CartItem model
import { CartItem } from "./cartItemModel";

// Define associations between models
export const defineAssociations = () => {
  // Set up the 1-to-many relationship between user and wishlist
  User.hasMany(Wishlist, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });
  Wishlist.belongsTo(User, {
    foreignKey: "userId",
  });

  // Set up the 1-to-many relationship between user and cart
  User.hasMany(Cart, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });
  Cart.belongsTo(User, {
    foreignKey: "userId",
  });

  // Set up the 1-to-many relationship between user and rating
  User.hasMany(Rating, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });
  Rating.belongsTo(User, {
    foreignKey: "userId",
  });

  // Set up the 1-to-many relationship between product and rating

  // Set up the 1-to-many relationship between wishlist and wishlistProduct
  Wishlist.hasMany(WishlistProduct, {
    foreignKey: "wishlistId",
    onDelete: "CASCADE",
  });
  WishlistProduct.belongsTo(Wishlist, {
    foreignKey: "wishlistId",
  });

  // Set up the 1-to-many relationship between product and wishlistProduct

  // Set up the 1-to-many relationship between cart and cartItem
  Cart.hasMany(CartItem, {
    foreignKey: "cartId",
    onDelete: "CASCADE",
  });
  CartItem.belongsTo(Cart, {
    foreignKey: "cartId",
  });

  // Set up the 1-to-many relationship between product and cartItem
};
