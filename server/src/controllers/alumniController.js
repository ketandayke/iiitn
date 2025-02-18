import Alumni from "../models/alumni.js";

// Create Alumni
export const createAlumni = async (req, res) => {
  const { name, batch, specialization, yearOfPassing, email, contact } = req.body;

  try {
    const newAlumni = new Alumni({ name, batch, specialization, yearOfPassing, email, contact });
    await newAlumni.save();
    return res.status(201).json({ message: "Alumni created successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error!" });
  }
};

// Get All Alumni
export const getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    return res.status(200).json(alumni);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error!" });
  }
};
