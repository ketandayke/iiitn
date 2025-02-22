import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asynHandler.js";
import { Page } from "../models/page.model.js";
const getPage = asyncHandler(async(req,res,next)=>{
    try {
        const {alias}=req.params;
        const page=await Page.findOne({alias});
        if(!page){
            throw new ApiError(404,"Page not found");
        }

        res.status(200).json(new ApiResponse(200,"Page Successfully fetched",page))
        
    } catch (error) {
        next(error);
        
    }
});

const createSection = asyncHandler(async(req,res,next)=>{
    try {
        const {alias,sectionName}=req.params;
        const {content} =req.body;
        const page=await Page.findOne({alias});
        if(!page){
            page=await Page.create({
              alias ,
              sections:[]
        })
        }
        page.sections.push({sectionType:sectionName,content});
        await page.save();
        res.status(200).json(new ApiResponse(200,`${sectionName} created successfully`,page))
        
    } catch (error) {
        next(error);
        
    }
})

const editSection =asyncHandler(async(req,res,next)=>{
     try {
           const {alias,sectionName} =req.params;
           const {content}=req.body;

           const page=await Page.findOne({alias});
        //    console.log(page);
           const section=page.sections.find(sec=>sec.sectionType===sectionName);
           if(!section){
            throw new ApiError(404,"Section not found !please create section first");
           }
           section.content=content;
           await page.save();
           res.status(201).json(new ApiResponse(201,`${sectionName} updated successfully`,page))

     } catch (error) {
         next(error);
     }
})

const deleteSection = asyncHandler(async(req,res,next)=>{
    try {
          const{alias,sectionName}=req.params;
          const page=await Page.findOne({alias});
          if(!page){
            throw new ApiError(404,"Page not found");
          }
          page.sections=page.sections.filter(section=>section.sectionType!==sectionName);
          await page.save();
          res.status(200).json(new ApiResponse(200,`${sectionName} deleted successfully`,));

        
    } catch (error) {
        next(error);
        
    }
})

const addContent =asyncHandler(async(req,res,next)=>{
    try {
        const {alias,sectionName}=req.params;
        const {content}=req.body;
        const page = await Page.findOne({alias});
        if(!page){
            throw new ApiError(404,"Page not found");
        }
        const section = page.sections.find((sec)=>sec.sectionType===sectionName);
        if(!section){
            throw new ApiError(401,"Section not found");
        }
        section.content.push(content);
        await page.save();
        res.status(201).json(new ApiResponse(200,"Content added successfully",page));

    } catch (error) {
        next(error);
    }
});

const editContent =asyncHandler(async(req,res,next)=>{
    try {
        const {alias,sectionName}=req.params;
        const {contentId,updatedContent}=req.body;
        const page = await Page.findOne({alias});
        if(!page){
            throw new ApiError(404,"Page not found");
        }
        const section = page.sections.find((sec)=>sec.sectionType===sectionName);
        if(!section){
            throw new ApiError(401,"Section not found");
        }
        const index=section.content.findIndex((item)=>item._id.toString()===contentId);
        if(index==-1){
            throw new ApiError(404,"Content not found");
        }
        section.content[index]=updatedContent;
        await page.save();
        res.status(200).json(new ApiResponse(200,"Content edited successfully",page))

    } catch (error) {
        next(error);
    }
})


const deleteContent =asyncHandler(async(req,res,next)=>{
    try {
        const {alias,sectionName}=req.params;
        const {contentId}=req.body;
        const page = await Page.findOne({alias});
        if(!page){
            throw new ApiError(404,"Page not found");
        }
        const section = page.sections.find((sec)=>sec.sectionType===sectionName);
        if(!section){
            throw new ApiError(401,"Section not found");
        }
        section.content = section.content.filter((item)=>item._id.toString()!=contentId);
       
        await page.save();
        res.status(200).json(new ApiResponse(200,"Content deleted successfully",page))

    } catch (error) {
        next(error);
    }
})


export{
    getPage,
    createSection,
    editSection,
    deleteSection,
    addContent,
    editContent,
    deleteContent
}