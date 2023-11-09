import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import path from "path";
import ejsLayout from "express-ejs-layouts";
const PORT = 3400;

const server = express();

// parse form data

server.use(express.urlencoded({ extended: true }));

// setup view Engine settings

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.use(ejsLayout);

// create an instance of Class (ProductController)
const productController = new ProductController();

// like routing
server.get("/", productController.getProducts);
server.get("/new", productController.getAddForm);
server.post("/", productController.addNewProduct);

// middleware for the serve the static files
server.use(express.static("src/views"));

// server.get("/", (req, res) => {
//   return res.send("welcome to Inventory App");
// });

server.listen(PORT, (err) => {
  if (err) {
    return err;
  } else {
    return console.log("server running on the Port: 3400");
  }
});
