import express from "express";
import RepairController from "./controllers/repair.controller.js";

const router = express.Router();

router.get("/", RepairController.getRepairs);
router.get("/sale/:id", RepairController.getRepairByIdSale);
router.get("/:id", RepairController.getRepairById);
router.post("/", RepairController.createRepair);
router.patch("/:id", RepairController.patchRepair);
router.delete("/:id", RepairController.deleteRepair);

export default router;
