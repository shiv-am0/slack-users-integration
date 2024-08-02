import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import slackRoutes from "./routes/slackRoutes";
import cors from "cors";

require("dotenv").config();

const app = express();

connectDB();

app.use(cors())
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/slack", slackRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app;
