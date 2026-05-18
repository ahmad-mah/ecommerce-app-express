import { error } from "node:console";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const login = async (body) => {
  let { email, password } = body;

  email = email.trim().toLowercase();

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  user.lastLogin = new Date();

  await user.save();

  return user;
};

const register = async (body) => {
  let { name, email, password } = body;

  email = email.trim().toLowercase();
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};

const logout = async (session) => {
  return new Promise((resolve, reject) => {
    session.destroy((err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

const profile = async (id) => {
  const user = await User.findById(id).select("-password");
  if (!user) {
    throw new Error("User not found!");
  }

  return user;
};

export default {
  login,
  register,
  logout,
  profile,
};
