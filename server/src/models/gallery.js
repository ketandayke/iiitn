import mongoose from "mongoose";

// Define schema for Gallery
const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true, // Path to image or file URL
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current date
  },
});

// Create Gallery model from schema
const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;
