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
exports.SendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const promises_1 = __importDefault(require("fs/promises"));
const SendEmail = (email, subject, template) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Read the image file as a buffer
        const imageAttachment = yield promises_1.default.readFile("./mailer/media/skin_ai_logo.png");
        // Create a Nodemailer transporter
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // Email user from environment variables
                pass: process.env.EMAIL_PASS, // Email password or app-specific password
            },
        });
        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject,
            html: template,
            attachments: [
                {
                    filename: "skin_ai_logo.png",
                    content: imageAttachment,
                    encoding: "base64",
                    cid: "uniqueImageCID",
                },
            ],
        };
        // Send email
        yield transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email} successfully.`);
    }
    catch (error) {
        console.error(`Failed to send email: ${error}`);
        throw new Error("Email sending failed. Please check your configuration.");
    }
});
exports.SendEmail = SendEmail;
