import {mongoose,Schema} from "mongoose";

const AcademicProgramSchema = new Schema({
    degreeType: { type: String, enum: ["UG", "PhD", "Student Exchange"], required: true },
    name: { type: String, required: true },
    specialization: [{ type: String }], // For UG: CSE, ECE, AI, etc.
    description: { type: String },
    image: { type: String }, // Image URL
});

const AcademicPrograms=mongoose.model("AcademicPrograms",AcademicProgramSchema);
export {AcademicPrograms};