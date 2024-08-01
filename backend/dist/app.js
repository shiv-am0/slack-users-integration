"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const db_1 = __importDefault(require("./config/db"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const cors_1 = __importDefault(require("cors"));
// import { errorHandler } from './middlewares/errorHandler';
require("dotenv").config();
const app = (0, express_1.default)();
(0, db_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
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
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/auth", authRoutes_1.default);
// app.use(errorHandler);
app.get("/", (req, res) => {
    console.log(req.oidc.isAuthenticated());
    const isAuthenticated = req.oidc.isAuthenticated();
    const response = isAuthenticated ? req.oidc.user : "Not logged in";
    res.send(response);
});
exports.default = app;
