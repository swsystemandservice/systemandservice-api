import express from "express";
import auth from "../../middlewares/authentication.js";
import AccountController from "./controllers/account.controller.js";

const router = express.Router();

router.get("/", AccountController.getAccount);
router.post("/register", AccountController.register);
router.post("/login", AccountController.login);
router.get("/info", auth.verifyToken, AccountController.profileInfo);
router.get("/:id", AccountController.getAccountById);
router.patch("/:id", AccountController.patchAccount);
router.delete('/:id', AccountController.deleteAccount)

export default router;
