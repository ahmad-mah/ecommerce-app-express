import express from "express";
import productController from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/products", productController.createProductController);
productRouter.get("/products", productController.getAllProductsController);

productRouter.get("/products/:id", productController.getProductByIdController);

productRouter.put("/products/:id", productController.updateProductController);
productRouter.delete("/products/:id", productController.deleteProductController);

export default productRouter;
