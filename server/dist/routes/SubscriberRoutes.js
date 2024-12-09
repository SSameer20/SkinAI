"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SubscriberController_1 = require("../controller/SubscriberController");
const SubscriberRouter = express_1.default.Router();
/**
 * Route for registering a subscriber.
 * Endpoint: POST /register
 */
SubscriberRouter.post("/register", SubscriberController_1.SubscriberRegister);
/**
 * Route for fetching all subscribers.
 * Endpoint: GET /subscribers
 */
SubscriberRouter.get("/subscribers", SubscriberController_1.AllSubscribers);
exports.default = SubscriberRouter;
