import { Router } from "express";
import {
    getAllPages, getPage, getSection, createSection, editSection, deleteSection,
    addContent, editContent, deleteContent, selectContent,
    getHomepageLatest, getLatestSection
} from "../controllers/admin.page.controllers.js";

import { handleAdminLogin, showAdminProfile, logoutAdmin } from "../controllers/admin.controllers.js";
import { deleteFile, uploadFile, uploadContent, uploadImageWithText } from "../controllers/admin.fileUpload.controllers.js";
import { verifyAdminToken } from "../middlewares/adminHeadAuth.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

// ✅ **Admin Authentication Routes**
router.post("/login", handleAdminLogin);                  // Admin Login
router.get("/profile", verifyAdminToken, showAdminProfile); // Get Admin Profile (Protected)
router.post("/logout", verifyAdminToken, logoutAdmin);      // Logout Admin (Protected)

// ✅ **Page and Section Routes**
router.get("/pages", getAllPages);
router.get("/page/:alias", getPage);
router.get("/page/:alias/:sectionName", getSection);
router.post("/page/:alias/:sectionName/create", createSection);
router.put("/page/:alias/:sectionName/edit", editSection);
router.delete("/page/:alias/:sectionName/delete", deleteSection);

// ✅ **Section Content Routes**
router.post("/page/:alias/:sectionName/addContent", addContent);
router.put("/page/:alias/:sectionName/editContent", editContent);
router.delete("/page/:alias/:sectionName/deleteContent", deleteContent);

// ✅ **File Upload Routes**
router.post("/page/:alias/:sectionName/upload", upload.single("file"), uploadContent);
router.post("/page/:alias/:sectionName/upload/text", uploadFile);
router.post("/page/:alias/:sectionName/upload/file/:type", upload.single("file"), uploadFile);
router.post("/page/:alias/:sectionName/upload/image-text", upload.single("file"), uploadImageWithText);
router.delete("/page/:alias/:sectionName/delete/:contentId", deleteFile);
router.put("/page/:alias/:sectionName/select/:contentId", selectContent);

// ✅ **Home Page & Latest Page Routes**
router.get("/home/latest", getHomepageLatest);
router.get("/latest/:sectionName", getLatestSection);

export default router;
