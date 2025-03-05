import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asynHandler.js";
import { Admin } from "../models/admin.model.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/sendMail.js";
import crypto from "crypto"; // To generate random passwords

// ✅ **Predefined Admin Credentials**
const PREDEFINED_ADMIN = {
    email: "admin@iiitn.ac.in",
    password: "admin@iiitn",
};

// ✅ **Generate Access & Refresh Tokens**
const generateTokens = async (adminId) => {
    const admin = await Admin.findById(adminId);
    const accessToken = jwt.sign(
        { _id: admin._id, email: admin.email, role: admin.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );

    const refreshToken = jwt.sign(
        { _id: admin._id, email: admin.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );

    admin.refreshToken = refreshToken;
    await admin.save();
    return { accessToken, refreshToken };
};

// ✅ **Admin Login**
export const handleAdminLogin = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    
    // 🔹 **Check if Admin Email & Password Match Predefined Admin**
    if (email !== PREDEFINED_ADMIN.email || password !== PREDEFINED_ADMIN.password) {
        return next(new ApiError(401, "Invalid admin credentials!"));
    }

    // 🔹 **Find Admin in Database**
    let admin = await Admin.findOne({ email });

    // 🔹 **Create Admin If Not Exists**
    if (!admin) {
        admin = new Admin({
            name: "Super Admin",
            email: PREDEFINED_ADMIN.email,
            password: PREDEFINED_ADMIN.password,
            role: "admin-head",
        });
        await admin.save();
    }

    // 🔹 **Generate Tokens**
    const { accessToken, refreshToken } = await generateTokens(admin._id);

    // 🔹 **Set Secure Cookies**
    const isProduction = process.env.NODE_ENV === "production";
    const cookieOptions = {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "None" : "Lax",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(new ApiResponse(200, "Admin login successful", { admin }));
});

// ✅ **Show Admin Profile**
export const showAdminProfile = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.admin._id).select("-password -refreshToken");
    res.status(200).json(new ApiResponse(200, "Admin profile fetched", admin));
});

// ✅ **Logout Admin**
export const logoutAdmin = asyncHandler(async (req, res) => {
    res.clearCookie("accessToken", { httpOnly: true, sameSite: "Lax" });
    res.clearCookie("refreshToken", { httpOnly: true, sameSite: "Lax" });

    res.status(200).json(new ApiResponse(200, "Logged out successfully"));
});


//create faculty and send pass on mails
export const createFaculty = asyncHandler(async (req, res, next) => {
    const { name, email, designation, contact } = req.body;

    let faculty = await Faculty.findOne({ email });
    if (faculty) return next(new ApiError(400, "Faculty already exists"));

    // Random Password Generate
    const password = crypto.randomBytes(6).toString("hex");

    // Password ko hash karo before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    
    faculty = new Faculty({ name, email, designation, contact, password: hashedPassword });
    await faculty.save();
    
    // Faculty ko mail bhejna
    await sendMail(email, "Your Faculty Account Password", `Your password: ${password}`);

    res.status(201).json(new ApiResponse(201, "Faculty created & password sent", faculty));
});

export const approveFacultyUpdate = asyncHandler(async (req, res, next) => {
    const { facultyId } = req.body;
    const faculty = await Faculty.findById(facultyId);
    
    if (!faculty) return next(new ApiError(404, "Faculty not found"));
    if (!faculty.pendingUpdates) return next(new ApiError(400, "No updates to approve"));

    // Pending updates ko actual profile me merge kar do
    Object.assign(faculty, faculty.pendingUpdates);
    faculty.pendingUpdates = {};

    faculty.isApproved = true; // Approve flag set karna zaroori hai
    await faculty.save();

    res.status(200).json(new ApiResponse(200, "Faculty update approved"));
});
