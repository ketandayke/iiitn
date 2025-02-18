import express from "express";
const router = express.Router();
import { createTender, getTenders } from "../controllers/tenderController.js"; // Tender controller
import { adminAuth } from "../middlewares/adminAuth.js";
router.post("/tenders", adminAuth, createTender);
router.get("/tenders", adminAuth, getTenders);

export default router;