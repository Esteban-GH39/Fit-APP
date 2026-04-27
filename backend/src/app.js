import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Fit App API!");
});

// Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});