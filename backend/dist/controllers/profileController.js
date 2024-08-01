"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
const profileController = (req, res) => {
    console.log("in profile");
    res.send(JSON.stringify(req.oidc.user));
};
exports.profileController = profileController;
