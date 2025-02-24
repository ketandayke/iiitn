import { Router } from "express";
import {
    getAllPages,getPage,getSection, createSection, editSection, deleteSection,
    addContent, editContent, deleteContent,selectContent, getHomepageLatest, getLatestSection
} from "../controllers/admin.page.controllers.js";
import {showAdminProfile, handleAdminLogin} from "../controllers/admin.controllers.js"
import { deleteFile, uploadFile,uploadContent,uploadImageWithText } from "../controllers/admin.fileUpload.controllers.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

// ✅ Admin Profile Routes
router.route("/profile").get(showAdminProfile);
router.route("/login").post(handleAdminLogin);

// ✅ Page and Section Routes
router.route("/pages").get(getAllPages);
router.route("/page/:alias").get(getPage);
router.route("/page/:alias/:sectionName").get(getSection);
router.route("/page/:alias/:sectionName/create").post(createSection);
router.route("/page/:alias/:sectionName/edit").put(editSection);
router.route("/page/:alias/:sectionName/delete").delete(deleteSection);

// ✅ Section Content Routes
router.route("/page/:alias/:sectionName/addContent").post(addContent);
router.route("/page/:alias/:sectionName/editContent").put(editContent);
router.route("/page/:alias/:sectionName/deleteContent").delete(deleteContent);
// routes/adminRoutes.js
router.route("/page/:alias/:sectionName/upload").post(upload.single("file"), uploadContent);


// ✅ File Upload Routes
router.route("/page/:alias/:sectionName/upload/text").post(uploadFile);
router.route("/page/:alias/:sectionName/upload/file/:type").post(upload.single("file"), uploadFile);
router.route("/page/:alias/:sectionName/delete/:contentId").delete(deleteFile);
router.route("/page/:alias/:sectionName/select/:contentId").put(selectContent);
router.post("/page/:alias/:sectionName/upload/image-text", upload.single("file"), uploadImageWithText);



// ✅ Home Page & Latest Page Routes
router.route("/home/latest").get(getHomepageLatest);
router.route("/latest/:sectionName").get(getLatestSection);

export default router;
