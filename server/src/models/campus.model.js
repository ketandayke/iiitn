import {mongoose,Schema} from "mongoose";

const CampusGallerySchema = new Schema({
    title: String, // e.g., "Hostel", "Labs", "Sports Complex"
    description: String, // Short description of the image category
    images: [String], // Array of image URLs
    uploadedAt: { type: Date, default: Date.now }
});

const CampusGallery = mongoose.model("CampusGallery", CampusGallerySchema);

export {CampusGallery};