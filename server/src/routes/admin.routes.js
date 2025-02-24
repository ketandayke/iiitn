import {Router} from "express";
import { showAdminProfile,handleAdminLogin } from "../controllers/admin.controllers.js";
import { getPage,createSection,editSection,deleteSection, addContent, editContent, deleteContent } from "../controllers/admin.page.controllers.js";
import { deleteFile, uploadFile } from "../controllers/admin.fileUpload.controllers.js";
import { upload } from "../middlewares/uploadMiddleware.js";
const router=Router();
//Admin contollers route
router.route("/profile").get(showAdminProfile);
router.route("/login").post(handleAdminLogin)

// Admins Page controlling routes and sections controlling

router.route("/page/:alias/").get(getPage);
router.route("/page/:alias/:sectionName/create").post(createSection);
router.route("/page/:alias/:sectionName/edit").put(editSection);
router.route("/page/:alias/:sectionName/delete").delete(deleteSection);

// Admins Page controlling rooutes to contoll content of sections
router.route("/page/:alias/:sectionName/addContent").post(addContent);
router.route("/page/:alias/:sectionName/editContent").put(editContent);
router.route("/page/:alias/:sectionName/deleteContent").delete(deleteContent);

// Admins File Uploading Controlling routes
router.route("/page/:alias/:sectionName/upload/text").post(uploadFile);
router.route("/page/:alias/:sectionName/upload/file/:type").post(upload.single("file"),uploadFile);
router.route("/page/:alias/:sectionName/delete/:contentId").delete(deleteFile);

// router.route("/employees").get(showAllEmployees);
// router.route("/curr-event/upload/db").post(uploadImageOnDB);
// router.route("curr-event/show-images").get(showCurrEventImages)

export default router;