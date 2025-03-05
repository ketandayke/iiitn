import { Faculty } from "../models/faculty.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import asyncHandler from "express-async-handler";

// ✅ Faculty Login
export const facultyLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const faculty = await Faculty.findOne({ email });
  if (!faculty) return next(new ApiError(404, "Faculty not found"));

  const isMatch = await faculty.comparePassword(password);
  if (!isMatch) return next(new ApiError(401, "Invalid credentials"));

  if (!faculty.isApproved) return next(new ApiError(403, "Approval pending"));

  const token = jwt.sign({ _id: faculty._id, email: faculty.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
  res.status(200).json(new ApiResponse(200, "Login successful", { token }));
});

// ✅ Faculty Requests Profile Update
export const requestProfileUpdate = asyncHandler(async (req, res, next) => {
  const faculty = await Faculty.findById(req.user._id);
  if (!faculty) return next(new ApiError(404, "Faculty not found"));

  faculty.pendingUpdates = req.body;
  await faculty.save();

  res.status(200).json(new ApiResponse(200, "Update request submitted"));
});

// ✅ Change Password
export const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const faculty = await Faculty.findById(req.user._id);
  if (!faculty) return next(new ApiError(404, "Faculty not found"));

  const isMatch = await faculty.comparePassword(oldPassword);
  if (!isMatch) return next(new ApiError(401, "Old password incorrect"));

  faculty.password = await bcrypt.hash(newPassword, 10);
  await faculty.save();

  res.status(200).json(new ApiResponse(200, "Password updated successfully"));
});

