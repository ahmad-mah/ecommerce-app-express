import express from "express";

import mainRoutes from "./routes/main.routes.js";
import productRoutes from "./routes/product.routes.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api", mainRoutes);
app.use("/api", productRoutes);
// error middleware (must be last)
app.use(errorHandler);

export default app;
