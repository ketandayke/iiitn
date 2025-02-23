import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asynHandler.js";
import { Page } from "../models/page.model.js";
import { cloudinary } from "../config/cloudinary.config.js";


const uploadFile = asyncHandler(async (req, res, next) => {
    try {
        const { alias, sectionName, type } = req.params; // <-- type is optional
        const { heading, description } = req.body;

        let page = await Page.findOne({ alias });
        if (!page) {
            page = new Page({ alias, sections: [] });
        }

        let section = page.sections.find((sec) => sec.sectionType === sectionName);
        if (!section) {
            section = { sectionType: sectionName, content: [] };
            page.sections.push(section);
        }

        // 📝 **Text Upload**
        if (!type) {
            section.content.push({ type: "text", heading, description, isVisible: true });
        } else {
            // 📂 **File Upload (Image/PDF)**
            if (!req.file) {
                throw new ApiError(401, "No file uploaded");
            }
            const fileUrl = req.file.path;
            const contentType = req.file.mimetype.includes("pdf") ? "pdf" : "image";
            section.content.push({ type: contentType, value: fileUrl, isVisible: true });
        }

        await page.save();
        res.status(201).json(new ApiResponse(201, "File uploaded successfully", { page }));

    } catch (error) {
        next(error);
    }
});


const deleteFile =asyncHandler(async(req,res,next)=>{
      try {
        const {alias,sectionName,contentId} = req.params;
        // const {description}=req.body; 

        let page = await Page.findOne({ alias });
        if (!page) {
            page = new Page({ alias, sections: [] });
        }

        // Find or create the section
        let section = page.sections.find((sec) => sec.sectionType === sectionName);
        if (!section) {
            section = { sectionType: sectionName, content: [] };
            page.sections.push(section);
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