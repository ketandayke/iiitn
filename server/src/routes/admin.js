import express from "express";
import { adminLogin } from "../controllers/authController.js"; // Admin login
import { adminAuth } from "../middlewares/adminAuth.js"; // Admin auth middleware

import { createTender, getTenders } from "../controllers/tenderController.js"; // Tender controller
import { createAlumni, getAlumni } from "../controllers/alumniController.js"; // Alumni controller
import { createGalleryItem, getGalleryItems } from "../controllers/galleryController.js"; // Gallery controller

const router = express.Router();

// Admin login route
router.post("/login", adminLogin);

// Admin routes for tenders
router.post("/tenders", adminAuth, createTender);
router.get("/tenders", adminAuth, getTenders);

// Admin routes for alumni
router.post("/alumni", adminAuth, createAlumni);
router.get("/alumni", adminAuth, getAlumni);

// Admin routes for gallery
router.post("/gallery", adminAuth, createGalleryItem);
router.get("/gallery", adminAuth, getGalleryItems);

export default router;
