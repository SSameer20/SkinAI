const Subscriber = require("../models/SubscriberSchema");
const { SendEmail } = require("../mailer/Mailer");

const SubscriberRegister = async (req, res) => {
  try {
    const { email } = req.body;
    const searchUser = await Subscriber.find({ email });
    if (searchUser.length > 0)
      return res.status(404).send({ message: "user already registered" });

    const newUser = new Subscriber({ email });
    newUser.save();
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
      <p>Thank you for joining us on this journey! We are thrilled to have you as one of our early subscribers at SkinAI. As a prelaunch subscriber, you will be the first to know about our official launch, exclusive updates, and early access opportunities. Here is a quick look at what you can expect from us </p>
      <div>
      <h3>User Details:</h3>
     <p>Email Address:  ${newUser.email}</p>
      <p>Time: ${new Date()}</p>
      </div>
      <p>Thank you for reading!</p>
    </body>
  </html>`;

    SendEmail(email, "Subscribed Successful", Template);
    return res
      .status(201)
      .send({ message: "successfully subscribed", data: newUser });
  } catch (error) {
    return res.status(500).send({ message: "server side error" });
  }
};

module.exports = { SubscriberRegister };
