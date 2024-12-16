import nodemailer from "nodemailer";
import fs from "fs/promises";
import { log } from "../lib/helper";
import { register } from "module";

export const SendEmail = async (
  email: string,
  subject: string,
  template: string
): Promise<void> => {
  try {
    // Read the image file as a buffer
    const imageAttachment = await fs.readFile(
      "./mailer/media/skin_ai_logo.png"
    );

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
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
          filename: "./media/skin_ai_logo.png",
          content: imageAttachment,
          encoding: "base64",
          cid: "uniqueImageCID",
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    log.info(`Email sent to ${email} successfully.`);
  } catch (error) {
    log.error(`Failed to send email: ${error}`);
    throw new Error("Email sending failed. Please check your configuration.");
  }
};

export const template = {
  login: (email: string, name: string) => {
    return ` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login | Skin AI</title>
      </head>
      <body>
        <img src="cid:uniqueImageCID" alt="Embedded Image" />
        <h1>Hello! ${name}</h1>
        <p>Thank you for logging into your account! We wanted you to acknowledge your recent login attempt was successful.</p>
        <div>
          <h3>Login Details:</h3>
          <p>Email Address: ${email}</p>
          <p>Login Time: ${new Date()}</p>
        </div>
        <p>Thank you for reading!</p>
      </body>
    </html>`;
  },

  register: (email: string, name: string) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Register | Skin AI</title>
      </head>
      <body>
        <img src="cid:uniqueImageCID" alt="Embedded Image" />
        <h1>Welcome! ${name}</h1>
        <p>Thank you for Registering! We welcome you to our family.</p>
        <div>
          <h3>User Details:</h3>
          <p>Email Address: ${email}</p>
          <p>Registration Time: ${new Date()}</p>
        </div>
      </body>
    </html>`;
  },
};
