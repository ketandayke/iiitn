import mongoose from "mongoose";

// Define schema for Notice
const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is required
  },
  description: {
    type: String,
    required: true, // Description is required
  },
  postedBy: {
    type: String,  // Admin name
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current date
  },
});

// Create Notice model from schema
const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;
