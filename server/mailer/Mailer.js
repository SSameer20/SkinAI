const nodemailer = require("nodemailer");
const fs = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(fs.readFile);

const SendEmail = async (email, sub, Template) => {
  const imageAttachment = await readFileAsync(
    "./mailer/media/skin_ai_logo.png"
  );

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "skin.ai2024@gmail.com",
      pass: "pana spre gxji ozzp",
    },
  });

  // Send email
  const info = await transporter.sendMail({
    from: "skin.ai2024@gmail.com",
    to: email,
    subject: sub,
    html: Template,
    attachments: [
      {
        filename: "skin_ai_logo.png",
        content: imageAttachment,
        encoding: "base64",
        cid: "uniqueImageCID",
      },
    ],
  });
};

module.exports = { SendEmail };
