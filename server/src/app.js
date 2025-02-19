import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import noticeRoutes from "./routes/notice.js"
import tendersRoutes from "./routes/tender.routes.js";
import alumniRoutes from "./routes/alumni.routes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import cors from "cors";
dotenv.config();  // Initialize environment variables
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    secure:false
}))

app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(cookieParser());

// Use the routes
app.use("/api/v1/tenders", tendersRoutes);  // Tenders routes
app.use("/api/v1/alumni", alumniRoutes);    // Alumni routes
app.use("/api/v1/notices", noticeRoutes);  // Notice routes
app.use("/api/faculty", facultyRoutes);

export {app};