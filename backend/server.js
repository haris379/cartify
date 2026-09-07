import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./Routes/authRoute.js";
import adminRoute from "./Routes/adminRoute.js";
import productRoutes from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
import addressRoutes from "./Routes/addressRoutes.js";
import orderRoutes from "./Routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Cartify API is running" });
});

connectDB();

export default app;

// Vercel imports `app` as a serverless function and never actually runs
// this file directly, so only call .listen() when running locally
// (e.g. `node server.js` / `npm run dev` on your own machine).
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
  });
}
