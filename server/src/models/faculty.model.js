import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";

const FacultySchema = new Schema({
  name: { type: String,
          required: true },
  designation: { type: String, 
            required: true },
  contact: { type: String },
  email: { type: String, 
           required: true, 
           unique: true },
  password:{
          type:String,
          required:true
  },
  isVerified:{
          type:Boolean,
          required:true,
          default:false
  },
  socials: {
    linkedin: { type: String },
    googleScholar: { type: String },
    researchGate: { type: String },
  },
  education: [{ type: String }],
  experience: [{ type: String }],
  department: { type: String, enum: ["CSE", "ECE", "BASIC SCIENCE"], required: true }, // No need for ObjectId
  researchDomains: [{ type: mongoose.Schema.Types.ObjectId, ref: "ResearchDomain" }], // Connected with Research Domain
  achievements: [{ type: mongoose.Schema.Types.ObjectId, ref: "Achievement" }], // References achievements
  irinsProfileLink: { type: String },
});

FacultySchema.pre('save',async(req,res)=>{
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password,10);
  next();
});

FacultySchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

FacultySchema.methods.generateAccessToken = function () {
  return jwt.sign(
      { _id: this._id, email: this.email, role: this.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

FacultySchema.methods.generateRefreshToken = function () {
  return jwt.sign(
      { _id: this._id, email: this.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};
const Faculty = mongoose.model("Faculty", FacultySchema);


export { Faculty };
