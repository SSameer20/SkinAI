"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controller/UserController");
const UserRouter = express_1.default.Router();
// User login route
UserRouter.post("/login", UserController_1.UserLogin);
// User registration route
UserRouter.post("/register", UserController_1.UserRegister);
exports.default = UserRouter;
