import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asynHandler.js";
import {Admin} from "../models/admin.model.js";

const generateAccessAndRefreshTokens=async(adminId)=>{
   try {
      const admin = await Admin.findById(adminId)
      const accessToken= await admin.generateAccessToken();
      const refreshToken = await admin.generateRefreshToken();
      if(!accessToken||!refreshToken){
        throw new ApiError(401,"Server issue !failed to generate tokens")
      }
      admin.refreshToken=refreshToken;
      await admin.save();
      return {accessToken,refreshToken}
      next();
   } catch (error) {
      next(error);
   }
}
const showAdminProfile = asyncHandler(async(req,res)=>{
    
})

const handleAdminLogin = asyncHandler(async(req,res)=>{
    try {
        const {email,password} =req.body;
        if(!email||!password){
            throw new ApiError(401,"All fields are required");
        }
        const existedAdmin=await Admin.findOne({email});
        if(!existedAdmin){
            throw new ApiError(404,"Admin does not exist !Please register first ")
        }
        const isPasswordValid = await existedAdmin.comparePassword(password)
        if(!isPasswordValid){
            throw new ApiError(401,"Something went wrong")
        }
        const {accessToken,refreshToken} =generateAccessAndRefreshTokens(existedAdmin._id)
        const admin=await Admin.findById(existedAdmin._id).select("-password -refreshToken")
        const isProduction=process.env.NODE_Env==="production";
        const options={
            httpOnly:true,
            secure: isProduction? true:false,
            sameSite:isProduction?"None":"lax",
            maxAge:7*24*60*60*1000
        }
        return res.status(200)
                  .cookie("accessToken",accessToken,options)
                  .cookie("refreshToken",refreshToken,options)
                  .json(new ApiResponse(200,"Login successfull"),admin)
    } catch (error) {
           next(error);
    }
})

export {showAdminProfile,handleAdminLogin}