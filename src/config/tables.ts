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

import colors from 'colors'; // Import colors

async function createTables() {
    console.log("Checking models...");

    if (!User) {
        console.error(colors.red("User model is null"));
        throw new Error("User model is null");
    }
    if (!Products) {
        console.error(colors.red("Products model is null"));
        throw new Error("Products model is null");
    }
    if (!Carts) {
        console.error(colors.red("Carts model is null"));
        throw new Error("Carts model is null");
    }
    if (!CartItems) {
        console.error(colors.red("CartItems model is null"));
        throw new Error("CartItems model is null");
    }
    if (!Wishlist) {
        console.error(colors.red("Wishlist model is null"));
        throw new Error("Wishlist model is null");
    }
    if (!WishlistProduct) {
        console.error(colors.red("WishlistProduct model is null"));
        throw new Error("WishlistProduct model is null");
    }
    if (!Rating) {
        console.error(colors.red("Rating model is null"));
        throw new Error("Rating model is null");
    }
    if (!Colors) {
        console.error(colors.red("Colors model is null"));
        throw new Error("Colors model is null");
    }
    if (!ProductColor) {
        console.error(colors.red("ProductColor model is null"));
        throw new Error("ProductColor model is null");
    }
    if (!ProductCategory) {
        console.error(colors.red("ProductCategory model is null"));
        throw new Error("ProductCategory model is null");
    }
    if (!Admin) {
        console.error(colors.red("Admin model is null"));
        throw new Error("Admin model is null");
    }
    if (!Merchants) {
        console.error(colors.red("Merchants model is null"));
        throw new Error("Merchants model is null");
    }
    if (!Categories) {
        console.error(colors.red("Categories model is null"));
        throw new Error("Categories model is null");
    }

    try {
        console.log(colors.blue("Starting table creation process..."));

        const tables = [
            { name: "User", syncFn: () => User.sync() },
            { name: "Carts", syncFn: () => Carts.sync() },
            { name: "CartItems", syncFn: () => CartItems.sync() },
            { name: "Wishlist", syncFn: () => Wishlist.sync() },
            { name: "WishlistProduct", syncFn: () => WishlistProduct.sync() },
            { name: "Rating", syncFn: () => Rating.sync() },
            { name: "Colors", syncFn: () => Colors.sync() },
            { name: "Categories", syncFn: () => Categories.sync() },
            { name: "Merchants", syncFn: () => Merchants.sync() },
            { name: "Products", syncFn: () => Products.sync() },
            { name: "ProductColor", syncFn: () => ProductColor.sync() },
            { name: "ProductCategory", syncFn: () => ProductCategory.sync() },
            { name: "Admin", syncFn: () => Admin.sync() },
        ];

        for (const table of tables) {
            try {
                await table.syncFn();
                console.log(colors.green(`${table.name} table created successfully`));
            } catch (error) {
                console.error(colors.red(`Error creating ${table.name} table: ${error.message}`));
            }
        }

        console.log(colors.green("All tables processed successfully."));
    } catch (globalError) {
        console.error(colors.bgRed.white("Unexpected error during table creation: "), globalError);
    }
}

export default createTables;

