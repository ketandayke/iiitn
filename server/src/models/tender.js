import mongoose from "mongoose";

// Define schema for Tender
const tenderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,  // Can be admin or some other role
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

// Create Tender model from schema
const Tender = mongoose.model("Tender", tenderSchema);

export default Tender;
