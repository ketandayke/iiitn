import express from "express";
import { createNotice, getNotices } from "../controllers/noticeController.js";
import { adminAuth } from "../middlewares/adminAuth.js"; // Admin auth middleware

const router = express.Router();

// Admin route to create a notice
// router.post("/create", adminAuth, createNotice);
router.post("/create",createNotice);

// Public route to get all notices
router.get("/all-notices", getNotices);

export default router;
