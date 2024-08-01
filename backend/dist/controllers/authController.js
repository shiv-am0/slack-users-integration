"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callback = void 0;
const User_1 = __importDefault(require("../models/User"));
const callback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { sub, name, email, picture } = req.body.user;
    console.log("Callback");
    try {
        const user = yield User_1.default.findOneAndUpdate({ sub: sub }, {
            sub: sub,
            name: name,
            email: email,
            picture: picture,
        }, { upsert: true, new: true } // Upsert: create a new user if not found, return the updated user if found
        );
        res.json({ message: `User ${user.name} created successfully!` });
    }
    catch (err) {
        // Handle any errors that occur
        res.json({ message: "Unable to create user!" });
        next(err);
    }
});
exports.callback = callback;
