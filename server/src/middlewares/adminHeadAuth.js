import jwt from "jsonwebtoken";
import ApiError from "../utils/apiError.js"
const adminHeadAuth = asyncHandler(async(role=null,req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.headers.authorization().replace("Bearer","").trim()
        if(!token){
            throw new ApiError(401,"Unauthorized")
        }
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.admin=decodedToken;
        if(roll && req.admin.role!=role){
            throw new ApiError(401,"Unauthorized")
        }
        next();
    } catch (error) {
        next(error)
    }

}) 

export default adminHeadAuth;
