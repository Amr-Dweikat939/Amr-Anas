//import all models
import { User } from "../models/UserModel";
import { Product } from "../models/ProductModel";
import { Cart } from "../models/CartModel";
import { CartItem } from "../models/CartItemModel";
import { Wishlist } from "../models/WishListModel";
import { WishlistProduct } from "../models/WishListProductModel";
import { Rating } from "../models/RatingModel";
import { Color } from "../models/ColorModel";
import { ProductColor } from "../models/ProductColorModel";
import { ProductCategory } from "../models/ProductCategoryModel";
import { Admin } from "../models/AdminModel";
import { Merchant } from "../models/MerchantModel";
import { Category } from "../models/CategoryModel";

import colors from 'colors'; // Import colors

async function createTables() {
    console.log("Checking models...");

    if (!User || !Product || !Cart || !CartItem || !Wishlist ||
        !WishlistProduct || !Rating || !Color || !ProductColor ||
        !ProductCategory || !Admin || !Merchant || !Category) {

        console.error(colors.red("One or more models are null."));
        throw new Error("One or more models are null.");
    }

    try {
        console.log(colors.blue("Starting table creation process..."));

        const tables = [
            { name: "User", syncFn: () => User.sync() },
            { name: "Carts", syncFn: () => Cart.sync() },
            { name: "CartItems", syncFn: () => CartItem.sync() },
            { name: "Wishlist", syncFn: () => Wishlist.sync() },
            { name: "WishlistProduct", syncFn: () => WishlistProduct.sync() },
            { name: "Rating", syncFn: () => Rating.sync() },
            { name: "Colors", syncFn: () => Color.sync() },
            { name: "Categories", syncFn: () => Category.sync() },
            { name: "Merchants", syncFn: () => Merchant.sync() },
            { name: "Products", syncFn: () => Product.sync() },
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

