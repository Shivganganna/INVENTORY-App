import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();

    res.render("products", { products: products });

    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html")
    // );
  }
  // No arrow function for the methods
  getAddForm(req, res) {
    return res.render("new-product");
  }

  addNewProduct(req, res) {
    // validating product data.
    const { name, price, imageUrl } = req.body;
    let errors = [];

    if (!name || name.trim() == "") {
      errors.push("Name is required");
    }

    if (!price || parseFloat(price) < 1) {
      errors.push("Price must be positive Value");
    }

    try {
      const validUrl = new URL();
    } catch {}
    // access data from form
    // console.log(req.body); // undefinded
    ProductModel.add(req.body);

    let products = ProductModel.get();
    res.render("products", { products: products });
  }
}
