import {Router} from "express";

const router=Router();
router.route("/profile").get(showAdminProfile);
router.route("/employees").get(showAllEmployees);
router.route("/curr-event/upload/db").post(uploadImageOnDB);
router.route("curr-event/show-images").get(showCurrEventImages)

export default router;