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
exports.AllSubscribers = exports.SubscriberRegister = void 0;
const SubscriberModel_1 = __importDefault(require("../models/SubscriberModel"));
const Mailer_1 = require("../mailer/Mailer");
const SubscriberRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        // Check if the user is already registered
        const searchUser = yield SubscriberModel_1.default.find({ email });
        if (searchUser.length > 0) {
            res.status(404).send({ message: "User already registered" });
            return;
        }
        // Create a new subscriber
        const newUser = new SubscriberModel_1.default({ email });
        yield newUser.save();
        // Email Template
        const Template = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Skin AI</title>
      </head>
      <body>
        <img src="cid:uniqueImageCID" alt="Embedded Image" />
        <h1>Hello!</h1>
        <p>Thank you for joining us on this journey! We are thrilled to have you as one of our early subscribers at SkinAI. As a prelaunch subscriber, you will be the first to know about our official launch, exclusive updates, and early access opportunities. Here is a quick look at what you can expect from us:</p>
        <div>
          <h3>User Details:</h3>
          <p>Email Address: ${newUser.email}</p>
          <p>Time: ${new Date()}</p>
        </div>
        <p>Thank you for reading!</p>
      </body>
    </html>`;
        // Send Email
        yield (0, Mailer_1.SendEmail)(email, "Subscribed Successfully", Template);
        res.status(201).send({ message: "Successfully subscribed", data: newUser });
    }
    catch (error) {
        res.status(500).send({ message: "Server-side error" });
        return;
    }
});
exports.SubscriberRegister = SubscriberRegister;
const AllSubscribers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield SubscriberModel_1.default.find();
        res.status(200).send({ subscribers: users });
    }
    catch (error) {
        res.status(500).send({ message: error });
    }
});
exports.AllSubscribers = AllSubscribers;
