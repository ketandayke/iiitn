import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asynHandler.js";

const registerAlumni = asyncHandler(async(req,res)=>{
    res.status(200).json(new ApiResponse(200,"successfull registered"));
})

export  {registerAlumni}