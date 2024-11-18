//import all models
import { User } from "../models/userModel";
import { Products } from "../models/ProductModel";
import { Carts } from "../models/cartModel";
import { CartItems } from "../models/cartItemModel";
import { Wishlist } from "../models/wishListModel";
import { WishlistProduct } from "../models/wishListProductModel";
import { Rating } from "../models/ratingModel";
import { Colors } from "../models/ColorModel";
import { ProductColor } from "../models/ProductColorModel";
import { ProductCategory } from "../models/ProductCategoryModel";
import { Admin } from "../models/AdminModel";
import { Merchants } from "../models/MerchantModel";
import { Categories } from "../models/CategoryModel";

//CREATE ALL TABLES
async function createTables() {
    console.log("Checking models...");

    if (!User) {
        console.error("User model is null");
        throw new Error("User model is null");
    }
    if (!Products) {
        console.error("Products model is null");
        throw new Error("Products model is null");
    }
    if (!Carts) {
        console.error("Carts model is null");
        throw new Error("Carts model is null");
    }
    if (!CartItems) {
        console.error("CartItems model is null");
        throw new Error("CartItems model is null");
    }
    if (!Wishlist) {
        console.error("Wishlist model is null");
        throw new Error("Wishlist model is null");
    }
    if (!WishlistProduct) {
        console.error("WishlistProduct model is null");
        throw new Error("WishlistProduct model is null");
    }
    if (!Rating) {
        console.error("Rating model is null");
        throw new Error("Rating model is null");
    }
    if (!Colors) {
        console.error("Colors model is null");
        throw new Error("Colors model is null");
    }
    if (!ProductColor) {
        console.error("ProductColor model is null");
        throw new Error("ProductColor model is null");
    }
    if (!ProductCategory) {
        console.error("ProductCategory model is null");
        throw new Error("ProductCategory model is null");
    }
    if (!Admin) {
        console.error("Admin model is null");
        throw new Error("Admin model is null");
    }
    if (!Merchants) {
        console.error("Merchants model is null");
        throw new Error("Merchants model is null");
    }
    if (!Categories) {
        console.error("Categories model is null");
        throw new Error("Categories model is null");
    }

    try {
        console.log("Creating tables...");
        await User.sync();
        console.log("User table created");
        await Products.sync();
        console.log("Products table created");
        await Carts.sync();
        console.log("Carts table created");
        await CartItems.sync();
        console.log("CartItems table created");
        await Wishlist.sync();
        console.log("Wishlist table created");
        await WishlistProduct.sync();
        console.log("WishlistProduct table created");
        await Rating.sync();
        console.log("Rating table created");
        await Colors.sync();
        console.log("Colors table created");
        await ProductColor.sync();
        console.log("ProductColor table created");
        await ProductCategory.sync();
        console.log("ProductCategory table created");
        await Admin.sync();
        console.log("Admin table created");
        await Merchants.sync();
        console.log("Merchants table created");
        await Categories.sync();
        console.log("Categories table created");
        console.log("Tables created successfully");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
}

export default createTables;

