import express from "express";
import { createNotice, getNotices } from "../controllers/noticeController.js";
import { adminAuth } from "../middlewares/adminAuth.js"; // Admin auth middleware

const router = express.Router();

// Admin route to create a notice
router.post("/", adminAuth, createNotice);

// Public route to get all notices
router.get("/", getNotices);

export default router;
