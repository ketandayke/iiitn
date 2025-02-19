import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    qualifications: { type: [String], default: [] },
    experience: { type: String, required: true },
    subjects_taught: { type: [String], default: [] },
    publications: [
      {
        title: String,
        year: Number,
        link: String,
      },
    ],
    office_hours: String,
    linkedin: String,
    google_scholar: String,
  },
  { timestamps: true }
);

const Faculty = mongoose.model("Faculty", FacultySchema);
export default Faculty;
