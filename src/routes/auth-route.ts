import { Router } from "express";
import { login, signup } from "../controllers/auth-controller";

console.log("....heloo....");

const router = Router();
router.post("/signup", signup);
router.post("/login", login);

export default router;
