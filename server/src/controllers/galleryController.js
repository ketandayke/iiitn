import Gallery from "../models/gallery.js";

// Create Gallery Item
export const createGalleryItem = async (req, res) => {
  const { title, description, imageUrl } = req.body;

  try {
    const newItem = new Gallery({ title, description, imageUrl });
    await newItem.save();
    return res.status(201).json({ message: "Gallery item added successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error!" });
  }
};

// Get All Gallery Items
export const getGalleryItems = async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    return res.status(200).json(galleryItems);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error!" });
  }
};
