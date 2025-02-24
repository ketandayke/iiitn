import {mongoose,Schema} from "mongoose";

const contentSchema = new Schema({
    type:{
        type:String,
        required:true
    },
    value:{
        type:mongoose.Schema.Types.Mixed,
    },
    isHero:{
        type:Boolean,
     default :false 
    },
    isVisible:{
        type:Boolean,
        default:true,
    },
    description:{
        type:String
    }
    
})
const sectionSchema = new Schema({
      sectionType:{
        type:String,
        required:true,
        
      },
      content:[contentSchema]
})
const pageSchema = new Schema(
    {
    
        alias:{
            type:String,
            unique:true,
            required:true
        },
        sections:[sectionSchema]
    },
    {
        timestamps:true
    })

const Page = mongoose.model("Page",pageSchema);
export {Page}

