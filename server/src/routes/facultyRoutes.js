import express from "express";
import {
  getAllFaculty,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} from "../controllers/facultyController.js";
import { isAdmin } from "../middlewares/authMiddleware.js"; // 👈 Import middleware

const router = express.Router();

router.get("/", getAllFaculty); // ✅ Anyone can view
router.get("/:id", getFacultyById); // ✅ Anyone can view

router.post("/", isAdmin, createFaculty); // ❌ Only Admin
router.put("/:id", isAdmin, updateFaculty); // ❌ Only Admin
router.delete("/:id", isAdmin, deleteFaculty); // ❌ Only Admin

export default router;
