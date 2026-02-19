import express from "express";
import { dbConnect } from "./db/db.js";
import "dotenv/config";
import crudRouter from "./routes/crud.route.js";
import routerAuth from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser"; // ✅ ADD THIS

const app = express();
const PORT = process.env.PORT || 4000;

// 🔥 MIDDLEWARE (order matters)
app.use(express.json());
app.use(cookieParser()); // ✅ MUST be before routes

app.use(
  cors({
    origin: "https://faridasnboard.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ROUTES
app.use("/api/auth", routerAuth);
app.use("/api/crud", crudRouter);

// DB + SERVER
dbConnect();
app.listen(PORT, () => {
  console.log("server is running");
});
