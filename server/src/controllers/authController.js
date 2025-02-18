import User from "../models/user.js"; // Import User model for DB operations
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Admin Login
export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user with given email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: "Admin not found!" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    return res.status(200).json({ token, message: "Admin Login Successful!" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
