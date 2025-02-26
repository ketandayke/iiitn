import {mongoose,Schema} from "mongoose";

const FacultySchema = new Schema({
    name: String,
    designation: String,
    contact: String,
    email: String,
    socials: [String],
    education: [String],
    experience: [String],
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    researchAreas: [String], // Link with Domain names
    publications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Publication' }],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    irinsProfileLink: String
  });
  
const Faculties = mongoose.model("Faculties",FacultySchema);
export {Faculties};