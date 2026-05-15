import express from "express";
import session from "express-session";

import mainRoutes from "./routes/main.routes.js";
import productRoutes from "./routes/product.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import userRoutes from "./routes/user.routes.js";
import cartRoutes from "./routes/cart.routes.js";

const app = express();

//middleware
app.use(express.json());
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
  }),
);
//routes
app.use("/api", mainRoutes);
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

// error middleware (must be last)
app.use(errorHandler);

export default app;
