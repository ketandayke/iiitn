import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const FacultySchema = new Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Predefined by Admin
    socials: { type: [String], default: [] },
    education: { type: [String], default: [] },
    experience: { type: [String], default: [] },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    researchAreas: { type: [String], default: [] },
    publications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Publication" }],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
    responsibilities: { type: [String], default: [] },
    isApproved: { type: Boolean, default: false }, // Admin Approval
    pendingUpdates: { type: Schema.Types.Mixed, default: {} }, // Store requested changes
  },
  { timestamps: true }
);

FacultySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

FacultySchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Faculty = mongoose.model("Faculty", FacultySchema);
export { Faculty };
