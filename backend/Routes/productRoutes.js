import express from "express";
import {
  createProduct,
  getAllProducts,
  updatedProduct,
  deleteProduct,
  getCategories,
} from "../controllers/productController.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", getAllProducts);
router.get("/categories", getCategories);

// Admin only
router.post("/add", verifyAdmin, createProduct);
router.put("/update/:id", verifyAdmin, updatedProduct);
router.delete("/delete/:id", verifyAdmin, deleteProduct);

export default router;
