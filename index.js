import express from "express";
import "./config/env.js";

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

// test DB connection first
sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL connected successfully ✅");

    return sequelize.sync();
  })
  .then(() => {
    console.log("DB Synced");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed ❌", err);
  });
