import Faculty from "../models/faculty.js";

// ✅ Get all faculty
export const getAllFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get single faculty by ID
export const getFacultyById = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) return res.status(404).json({ message: "Faculty not found" });
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create new faculty (Only Admin)
export const createFaculty = async (req, res) => {
  const newFaculty = new Faculty(req.body);
  try {
    const savedFaculty = await newFaculty.save();
    res.status(201).json(savedFaculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update faculty by ID (Only Admin)
export const updateFaculty = async (req, res) => {
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFaculty)
      return res.status(404).json({ message: "Faculty not found" });
    res.json(updatedFaculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete faculty (Only Admin)
export const deleteFaculty = async (req, res) => {
  try {
    const deletedFaculty = await Faculty.findByIdAndDelete(req.params.id);
    if (!deletedFaculty)
      return res.status(404).json({ message: "Faculty not found" });
    res.json({ message: "Faculty removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
