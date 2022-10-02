import express from "express";
import CustomerController from "./controllers/customer.controller.js";

const router = express.Router();

router.get("/", CustomerController.getCustomers);
router.get("/:id", CustomerController.getCustomerById);
router.post("/", CustomerController.createCustomer);
router.patch("/:id", CustomerController.patchCustomer);
router.delete("/:id", CustomerController.deleteCustomer);

export default router;
