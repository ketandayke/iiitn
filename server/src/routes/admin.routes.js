import express from "express";
import { createFaculty, approveFacultyUpdate } from "../controllers/admin.controller.js";
import { isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create-faculty", createFaculty); // ✅ Faculty Create & Send Mail
router.post("/approve-faculty", isAdmin, approveFacultyUpdate); // ✅ Approve Faculty Profile

export default router;
