import express from "express";
import "./config/env.js";
import mongoose from "mongoose";

import mainRoutes from "./routes/main.routes.js";
import productRoutes from "./routes/product.routes.js";
import sequelize from "./config/database.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api", mainRoutes);
app.use("/api", productRoutes);
// error middleware (must be last)
app.use(errorHandler);
const PORT = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(3000);
} catch (error) {
  console.log(error);
}
