import express from "express";
import cors from "cors";
import db from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Fit App API!");
});

app.get("/test-db", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT 1");
        res.json({ message: "Database connection successful!", rows });
    }   catch (error) {
        console.error(error);
            res.status(500).json({ 
            message: "Database connection failed!",
            error: error.message 
            });
        }
});

// Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});