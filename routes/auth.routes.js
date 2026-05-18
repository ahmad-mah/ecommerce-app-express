import express from "express";
import authController from "../controllers/auth.controller.js";
import {
  validateRegister,
  validateLogin,
  isAuth,
} from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/login", validateLogin, authController.login);
authRouter.post("/register", validateRegister, authController.register);
authRouter.post("/logout", isAuth, authController.logout);
authRouter.get("/profile", isAuth, authController.profile);

export default authRouter;
