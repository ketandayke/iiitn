import {CloudinaryStorage} from "multer-storage-cloudinary"
import { cloudinary } from "../config/cloudinary.config.js"
import multer from "multer"

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:async(req,file)=>{
        const folder=file.mimetype ==="application/json"?pdfs:images;
        return{
            folder:folder,
            resource_type:file.mimetype==="application/json"?"raw":"image",
            format:file.mimetype==="application/json"?"pdf":"webp",
            public_id:`${Date.now}-${file.originalName.split(" ").join("-")}`
        
        }
    }
});

const upload = multer({
    storage:storage,
    limits:{fileSize:10*1024*1024},
    fileFilter:(req,file,cb)=>{
        const allowedTypes=["image/jpeg","image/png","image/webp","application/pdf"];
        if(allowedTypes.includes(file.mimetype))cb(null,true);
        else cb(new Error("Invalid file type,Only jpeg,png,webp and pdf allowed"))
    }

})

export {upload}