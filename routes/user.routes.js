import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/user", userController.createUserController);
router.get("/user", userController.getUsersController);
router.post("/user/:id", userController.getUserByIdController);

export default router;
