import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errorHandler.js";
import adminRouter from "./routes/admin.routes.js";
import alumniRouter from "./routes/alumni.routes.js";
import academicProgramRouter from "./routes/academicPrograms.routes.js";
import achievementRouter from "./routes/achievement.routes.js";
import pageRouter from "./routes/page.routes.js";
import pageSectionConfigRouter from "./routes/pageSectionConfig.routes.js"

dotenv.config()
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true, // Allow credentials (cookies, authentication headers)
}));
app.use(express.static("public"));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(cookieParser());

app.get("/",(req,res)=>{
      res.json({"college":"IIITN"});
})

app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/alumni",alumniRouter);
app.use("/api/v1/page",pageRouter);
app.use("/api/v1/pageSectionConfig",pageSectionConfigRouter);
app.use("/api/v1/academic-program",academicProgramRouter);
app.use("/api/v1/achievement",achievementRouter);
app.use("error",errorHandler);


export {app};