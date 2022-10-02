import express from "express";
import SaleController from "./controllers/sale.controller.js";

const router = express.Router();

router.get("/", SaleController.getSales);
router.get("/customer/:id", SaleController.getSalesByCustomerId);
router.get("/:id", SaleController.getSaleById);
router.post("/", SaleController.createSale);
router.patch("/:id", SaleController.patchSale);
router.delete("/:id", SaleController.deleteSale);

export default router;
