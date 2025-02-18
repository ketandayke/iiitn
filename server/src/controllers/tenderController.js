import Tender from "../models/tender.js";

// Create Tender
export const createTender = async (req, res) => {
  const { title, description, postedBy, deadline } = req.body;

  try {
    const newTender = new Tender({ title, description, postedBy, deadline });
    await newTender.save();
    return res.status(201).json({ message: "Tender created successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error!" });
  }
};

// Get All Tenders
export const getTenders = async (req, res) => {
  try {
    const tenders = await Tender.find();
    return res.status(200).json(tenders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error!" });
  }
};
