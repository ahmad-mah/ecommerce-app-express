import express from "express";
import {
  getProducts,
  createProduct,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get("/products", getProducts);
productRouter.post("/products", createProduct);

export default productRouter;
