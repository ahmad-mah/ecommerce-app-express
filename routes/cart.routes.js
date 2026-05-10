import express from "express";
import cartController from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.post("/cart", cartController.addToCartController);
cartRouter.get("/cart", cartController.getCartController);

export default cartRouter;
