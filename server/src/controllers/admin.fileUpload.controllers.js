import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asynHandler.js";
import { Page } from "../models/page.model.js";
import { cloudinary } from "../config/cloudinary.config.js";

const uploadFile =asyncHandler(async(req,res,next)=>{
    try {
        const {alias,sectionName,type} = req.params;
        const {description}=req.body; 

        const page = await Page.findOne({alias});
        if(!page){
            throw new ApiError(404,"Page not found");
        }
        const section =page.sections.find((sec)=>sec.sectionType===sectionName);
        if(!section){
            throw new ApiError(404,"Section not found");
        }
        let fileUrl=null;
        if(type==="text"){
            section.content.push({type:"text",value:text,description,isVisible:true});
        }else{
            if(!req.file){
                throw new ApiError(401,"No file uploaded")
            }
            fileUrl=req.file.path;
            const contentType=req.file.mimetype.includes("pdf")?"pdf":"image";
            section.content.push({type:contentType,value:fileUrl,description,isVisible:true});
        }
        await page.save();
        res.status(201).json(new ApiResponse(201,"file uploaded successfully",{url:fileUrl}));
    } catch (error) {
        next(error);
        
    }
})

const deleteFile =asyncHandler(async(req,res,next)=>{
      try {
        const {alias,sectionName,contentId} = req.params;
        const {description}=req.body; 

        const page = await Page.findOne({alias});
        if(!page){
            throw new ApiError(404,"Page not found");
        }
        const section =page.sections.find((sec)=>sec.sectionType===sectionName);
        if(!section){
            throw new ApiError(404,"Section not found");
        }
        
        const content=section.content.find((item)=>item._id.toString()===contentId);
        if(!content){
            throw new ApiError(404,"Content not found");
        }
        if(content.type!=="text"){
            const public_id=content.value.split("/").pop().split(".")[0];
            const resource_type=content.type==="pdf"? "raw":"image";
            await cloudinary.uploader.destroy(public_id,{resource_type:resource_type})
        }
        section.content=section.content.find((item)=>item._id.toString()!==contentId);
        await page.save();
      } catch (error) {
        next(error);
      }
})
export {uploadFile,deleteFile}