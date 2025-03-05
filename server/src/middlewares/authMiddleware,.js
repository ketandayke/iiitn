import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError.js";
import { Admin } from "../models/admin.model.js";

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return next(new ApiError(401, "Unauthorized! No token provided."));

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return next(new ApiError(403, "Invalid token!"));
    }
};

export const isAdmin = async (req, res, next) => {
    const admin = await Admin.findById(req.user._id);
    if (!admin || admin.role !== "admin-head") {
        return next(new ApiError(403, "Only admin can perform this action"));
    }
    next();
};
