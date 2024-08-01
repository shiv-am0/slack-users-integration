import express from "express";
import session from "express-session";
import { auth } from "express-openid-connect";
import connectDB from "./config/db";
import authRoutes from './routes/authRoutes';
import cors from "cors";
// import { errorHandler } from './middlewares/errorHandler';

require("dotenv").config();

const app = express();

connectDB();

app.use(cors())
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
  })
);

// Auth0 configuration
// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SESSION_SECRET!,
//   baseURL: process.env.BASE_URL!,
//   clientID: process.env.AUTH0_CLIENT_ID!,
//   issuerBaseURL: `https://${process.env.AUTH0_DOMAIN!}`,
// };

// app.use(auth(config));
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

// app.use(errorHandler);

app.get("/", (req, res) => {
    console.log(req.oidc.isAuthenticated());
    const isAuthenticated = req.oidc.isAuthenticated();
    const response = isAuthenticated ? req.oidc.user : "Not logged in";
    res.send(response);
});

export default app;
