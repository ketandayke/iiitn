import mongoose, { Schema } from "mongoose";

const AcademicProgramSchema = new Schema({
    name: { type: String, required: true }, // Example: "B.Tech in CSE"
    degreeType: { type: String, enum: ["Undergraduate", "PhD", "Student Exchange"], required: true },
    studentsSeat:{type:Number,required:true},
    description: { type: String },
    image: { type: String }, // Image URL
}, { timestamps: true });

const AcademicPrograms = mongoose.model("AcademicPrograms", AcademicProgramSchema);
export { AcademicPrograms };
