// ===== ENVIRONMENT VARIABLES =====
import dotenv from "dotenv";
dotenv.config();

// ===== DEPENDENCIES =====
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// ===== CREATE EXPRESS APP =====
const app = express();

// ===== MIDDLEWARES =====
app.use(cors());
app.use(express.json());

// ===== TEST ROUTE =====
app.get("/", (req, res) => {
    res.send("API is running...");
});

// ===== MONGO DB CONNECTION =====
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
connectDB();

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});