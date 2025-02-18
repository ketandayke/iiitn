import express from "express";
import { adminAuth } from "../middlewares/adminAuth.js";
const router = express.Router();
import { createAlumni, getAlumni } from "../controllers/alumniController.js"; // Alumni controller

//  routes for alumni
router.post("/alumni", adminAuth, createAlumni);
router.get("/alumni", adminAuth, getAlumni);

export default router;