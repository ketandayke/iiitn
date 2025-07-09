import { Router } from "express";

import {handleFacultyRegister, handleFacultyLogin, showFacultyProfile, logoutFaculty } from "../controllers/faculty.controllers.js";

import { verifyFacultyToken } from "../middlewares/facultyAuth.js";

const router = Router();

router.post("/register", handleFacultyRegister);                  
router.post("/login", handleFacultyLogin);                  
router.get("/profile", verifyFacultyToken, showFacultyProfile); 
router.post("/logout", verifyFacultyToken, logoutFaculty);    


export default router;
