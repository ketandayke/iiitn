import {Router} from "express";

const router=Router();

router.route("/register").post(registerAlumni);


export default router;