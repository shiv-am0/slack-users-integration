import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import slackRoutes from "./routes/slackRoutes";
import cors from "cors";
import { config } from 'dotenv';

// Load environment variables from your .env file
config();

const app = express();

// Connect to MongoDB
connectDB();

// Initialize middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/auth", authRoutes);
app.use("/slack", slackRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to slack-users-integration app!");
});

export default app;
