import express from "express";
import ProductController from "./controllers/product.controller.js";

const router = express.Router();

router.get("/", ProductController.getProducts);
router.post("/", ProductController.createProduct);
router.patch("/decrement/:id", ProductController.decrementProduct);
router.get("/:id", ProductController.getProductById);
router.patch("/:id", ProductController.patchProduct);
router.delete("/:id", ProductController.deleteProduct);

export default router;
