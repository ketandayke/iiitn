import mongoose from "mongoose";

// Define the schema for User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true,   // Email should be unique
  },
  password: {
    type: String,
    required: true, // Password is required
  },
  // You can add more fields if required (like role, profile picture, etc.)
});

// Create the model from the schema
const User = mongoose.model("User", userSchema);

export default User;
