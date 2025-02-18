import mongoose from "mongoose";

// Define schema for Alumni
const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  batch: {
    type: String,  // e.g., 2020, 2021 batch
    required: true,
  },
  specialization: {
    type: String,
    required: true,  // E.g., CSE, ECE
  },
  yearOfPassing: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

// Create Alumni model from schema
const Alumni = mongoose.model("Alumni", alumniSchema);

export default Alumni;
