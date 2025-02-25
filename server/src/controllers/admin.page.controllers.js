import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asynHandler.js";
import { Page } from "../models/page.model.js";

const getAllPages =asyncHandler(async (req,res,next)=>{
    try {
        const pages=await Page.find();
        if(!pages){
            throw new ApiError(404,"No pages found");
        }
        // console.log("pages fetched ",pages);
        res.status(201).json(new ApiResponse(201,"Pages fetched",pages))
        
    } catch (error) {
        next(error);
    }
})
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

const getSection = asyncHandler(async (req, res, next) => {
    try {console.log("this is section call",req.params);
        const { alias, sectionName } = req.params;
        const page = await Page.findOne({ alias });
        // console.log("this is page",page);
        if (!page) throw new ApiError(404, "Page not found");

        const section = page.sections.find((sec) => sec.sectionType === sectionName);
        if (!section) throw new ApiError(404, "Section not found");
        // console.log("this is section",section); 
        res.status(200).json(new ApiResponse(200, "Section fetched successfully", section));
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


const addContent = asyncHandler(async (req, res, next) => {
    try {
        const { alias, sectionName } = req.params;
        const { content } = req.body;

        // Find or create the page
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

        // Add content to the section
        section.content.push(content);
        await page.save();

        res.status(201).json(new ApiResponse(200, "Content added successfully", page));
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
});

// admin.page.controllers.js
const selectContent = asyncHandler(async (req, res, next) => {
    try {
        const { alias, sectionName, contentId } = req.params;
        const { isVisible } = req.body; // Boolean to toggle visibility

        let page = await Page.findOne({ alias });
        if (!page) throw new ApiError(404, "Page not found");

        const section = page.sections.find(sec => sec.sectionType === sectionName);
        if (!section) throw new ApiError(404, "Section not found");

        const content = section.content.find(item => item._id.toString() === contentId);
        if (!content) throw new ApiError(404, "Content not found");
        // console.log("this is content visibility and content",content.isVisible,content);

        content.isVisible = isVisible !== undefined ? isVisible : !content.isVisible;
        await page.save();
        // console.log("after toggel content",content);
        res.status(200).json(new ApiResponse(200, "Content selection updated", content));
    } catch (error) {
        next(error);
    }
});



// GET /api/v1/page/home/latest
const getHomepageLatest = async (req, res, next) => {
    try {
        const page = await Page.findOne({ alias: "latest" });
        if (!page) throw new ApiError(404, "Page not found");

        const visibleSections = page.sections.map(section => ({
            sectionType: section.sectionType,
            content: section.content.filter(item => item.isVisible).slice(0, 5) // Limit to 5 items
        }));

        res.status(200).json(new ApiResponse(200, "Homepage latest fetched", visibleSections));
    } catch (error) {
        next(error);
    }
};

// GET /api/v1/page/latest/:sectionName
const getLatestSection = async (req, res, next) => {
    try {
        const { sectionName } = req.params;
        const page = await Page.findOne({ alias: "latest" });
        if (!page) throw new ApiError(404, "Page not found");

        const section = page.sections.find(sec => sec.sectionType === sectionName);
        if (!section) throw new ApiError(404, "Section not found");

        res.status(200).json(new ApiResponse(200, "All section content fetched", section.content));
    } catch (error) {
        next(error);
    }
};


export{
    getAllPages,
    getPage,
    getSection,
    createSection,
    editSection,
    deleteSection,
    addContent,
    editContent,
    deleteContent,
    selectContent,
    getHomepageLatest,
    getLatestSection
}