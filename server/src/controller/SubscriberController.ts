import { Request, Response } from "express";
import Subscriber from "../models/SubscriberModel";
import { SendEmail } from "../mailer/Mailer";

interface SubscriberRequestBody {
  email: string;
}

export const SubscriberRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email }: SubscriberRequestBody = req.body;

    // Check if the user is already registered
    const searchUser = await Subscriber.find({ email });
    if (searchUser.length > 0) {
      res.status(404).send({ message: "User already registered" });
      return;
    }

    // Create a new subscriber
    const newUser = new Subscriber({ email });
    await newUser.save();

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
    await SendEmail(email, "Subscribed Successfully", Template);
    res.status(201).send({ message: "Successfully subscribed", data: newUser });
  } catch (error) {
    res.status(500).send({ message: "Server-side error" });
    return;
  }
};

export const AllSubscribers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await Subscriber.find();
    res.status(200).send({ subscribers: users });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
