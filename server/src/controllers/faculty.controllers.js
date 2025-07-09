import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Faculty} from "../models/faculty.model.js";

const generateTokens = async (facultyId) => {
    const faculty = await Faculty.findById(facultyId);
    const accessToken = faculty.generateAccessToken();
    const refreshToken = faculty.generateRefreshToken();
    if(!refreshToken){
        throw new ApiError(500,"Internal server error!Unable to generate tokens");
    }
    faculty.refreshToken = refreshToken;
    await faculty.save();
    return { accessToken, refreshToken };
};

const handleFacultyRegister = asyncHandler(async(req,res,next)=>{
    try {
        const {name,email,password,designation,departement}=req.body;
        if([name,email,password,designation,departement].some((field)=>!field||field.trim()==="")){
            throw new ApiError(404,"All fields are required");
        }
        const faculty=await Faculty.findOne({email});
        if(faculty){
            throw new ApiError(401,"Faculty already exist !please Login")
        }

        faculty = await Faculty.create({
            name,
            email,
            password,
            designation,
            departement
        });

        sendNotification("Faculty registered",faculty);
        return res.status(202).json(new ApiResponse(202,"faculty created successfully",faculty));
    } catch (error) {
        next(error);
    }

});

const handleFacultyLogin = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    
    if(!email||!password){
        throw new ApiError(404,"All fields are required");
    }

    let faculty = await Faculty.findOne({ email });

    if (!faculty) {
        throw new ApiError(404,"Unauthorized access !Please register first");
    }
    
    const isPasswordValid = faculty.comparePassword(password);
    if(!isPasswordValid){
        throw new ApiError(404,"Something went wrong");
    }
    const { accessToken, refreshToken } = await generateTokens(faculty._id);

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
        .json(new ApiResponse(200, "faculty login successful", { faculty }));
});

 const showFacultyProfile = asyncHandler(async (req, res) => {
    const faculty = await faculty.findById(req.faculty._id).select("-password -refreshToken");
    res.status(200).json(new ApiResponse(200, "faculty profile fetched", faculty));
});

const logoutFaculty = asyncHandler(async (req, res) => {
    res.clearCookie("accessToken", { httpOnly: true, sameSite: "Lax" });
    res.clearCookie("refreshToken", { httpOnly: true, sameSite: "Lax" });

    res.status(200).json(new ApiResponse(200, "Logged out successfully"));
});

export {
    handleFacultyRegister,
    handleFacultyLogin,
    showFacultyProfile,
    logoutFaculty
}