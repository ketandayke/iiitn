import express from "express";
import {
  getAllFaculty,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} from "../controllers/facultyController.js";
import {adminAuth} from "../middlewares/adminAuth.js"; // 👈 Import middleware

const router = express.Router();

router.get("/", getAllFaculty); // ✅ Anyone can view
router.get("/:id", getFacultyById); // ✅ Anyone can view

router.post("/", adminAuth, createFaculty); // ❌ Only Admin
router.put("/:id", adminAuth, updateFaculty); // ❌ Only Admin
router.delete("/:id", adminAuth, deleteFaculty); // ❌ Only Admin

export default router;
