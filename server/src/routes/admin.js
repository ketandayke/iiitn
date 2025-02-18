import express from "express";

import { adminLogin } from "../controllers/authController.js"; // Admin login
import { adminAuth } from "../middlewares/adminAuth.js"; // Admin auth middleware

import { createGalleryItem, getGalleryItems } from "../controllers/galleryController.js"; // Gallery controller

const router = express.Router();

// Admin login route
router.post("/login", adminLogin);

// Admin routes for tenders


// Admin routes for gallery
router.post("/gallery", adminAuth, createGalleryItem);
router.get("/gallery", adminAuth, getGalleryItems);

export default router;
