import express from "express";
import { ConnectDB } from "./config/db.js";
import dotenv from "dotenv";
import noticeRoutes from "./routes/notice.js"; // Importing the notice routes
import tendersRoutes from "./routes/tenders.js"; // Import tenders routes
import alumniRoutes from "./routes/alumni.js"; // Import alumni routes

dotenv.config();  // Initialize environment variables
const app = express();

// Connect to MongoDB
ConnectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the routes
app.use("/api/notices", noticeRoutes);  // Notice routes
app.use("/api/tenders", tendersRoutes);  // Tenders routes
app.use("/api/alumni", alumniRoutes);    // Alumni routes




export {app};