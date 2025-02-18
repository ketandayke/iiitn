import Notice from "../models/notice.js";

// Create a new notice
export const createNotice = async (req, res) => {
  const { title, description, postedBy } = req.body;

  try {
    const newNotice = new Notice({
      title,
      description,
      postedBy,
    });
    
    await newNotice.save(); // Save to DB
    return res.status(201).json({ message: "Notice created successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error!" });
  }
};

// Get all notices
export const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 }); // Sort by latest
    return res.status(200).json(notices); // Send all notices
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error!" });
  }
};
