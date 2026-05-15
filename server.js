import "./config/env.js";
import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected successfully");

  app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
  });

} catch (error) {
  console.log("DB connection failed:", error);
}