import User from "../models/user.js";
import authService from "../services/auth.service.js";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
  try {
    const user = await authService.login(req.body);

    req.session.userId = user._id;
    res.status(200).json({
      message: "Logged in",
    });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);

    res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const logout = async(req, res) => {
  try {
   await authService.logout(req.session);
   res.clearCookie("connect.sid");
  res.status(200).json({
      message: "Logged out",
    });
   
  } catch (error) {
    next(error);
  }
};

const profile = async (req, res) => {
  try {
    const user = await authService.profile(req.session.userId);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export default {
  login,
  register,
  logout,
  profile,
};
