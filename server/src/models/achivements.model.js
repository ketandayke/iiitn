import {mongoose,Schema} from "mongoose";

const AchievmentSchema = new Schema({
    year:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        enum:["Student","Faculty","other"],
    },
    name:{
        type:String,
        required:true

    },
    title:{
        type:String, //paper published,grant received,patent received ,competition won
        required:true
    },
    description:{
        type:String,
        required:true
    },
    relatedLinks:[
        {
            type:String
        }
    ],
    associatedPeople:[
        {
            type:String
        }
    ],
    department:{
        type:String,
        enum:["CSE","ECE","BASIC SCIENCE"],

    }
},
{
    timestamps:true
}
);

const Achivements =mongoose.model("Achivements",AchievmentSchema);