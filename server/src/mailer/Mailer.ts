import nodemailer from "nodemailer";
import fs from "fs/promises";

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
          filename: "skin_ai_logo.png",
          content: imageAttachment,
          encoding: "base64",
          cid: "uniqueImageCID",
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email} successfully.`);
  } catch (error) {
    console.error(`Failed to send email: ${error}`);
    throw new Error("Email sending failed. Please check your configuration.");
  }
};
