import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { Faculty } from "../models/faculty.model.js";
import { ApiError } from "../utils/apiError.js";

const verifyFacultyToken = asyncHandler(async (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return next(new ApiError(401, "Unauthorized! Token not provided."));
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.faculty = await Faculty.findById(decoded._id).select("-password -refreshToken");

        if (!req.faculty) {
            return next(new ApiError(401, "Unauthorized! faculty not found."));
        }

        next();
    } catch (error) {
        return next(new ApiError(403, "Forbidden! Invalid token."));
    }
});

export {verifyFacultyToken}
