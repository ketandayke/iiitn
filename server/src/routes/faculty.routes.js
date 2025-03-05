import express from "express";
import { facultyLogin, requestProfileUpdate, changePassword } from "../controllers/faculty.controller.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", facultyLogin); // ✅ Faculty Login
router.post("/update-profile", verifyToken, requestProfileUpdate); // ✅ Request Profile Update
router.post("/change-password", verifyToken, changePassword); // ✅ Change Password

export default router;
