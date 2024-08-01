"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = require("../controllers/profileController");
const express_openid_connect_1 = require("express-openid-connect");
const router = (0, express_1.Router)();
router.get("/", (0, express_openid_connect_1.requiresAuth)(), profileController_1.profileController);
exports.default = router;
