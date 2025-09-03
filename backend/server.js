import express from "express"
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/authroutes.js";
import taskRoutes from "./routes/taskroutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";


const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow frontend to send cookies
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);
// app.get("*", console.log("hello"));

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendPath));
    // console.log(frontendPath)
  app.get(/.*/, (req, res) => {
 res.sendFile(path.join(frontendPath, "index.html"));
});
}



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})