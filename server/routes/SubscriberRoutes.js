const express = require("express");
const { Router } = express;
const {
  SubscriberRegister,
  AllSubscribers,
} = require("../controller/SubscriberController");

const SubscriberRouter = Router();

SubscriberRouter.post("/register", SubscriberRegister);
SubscriberRouter.get("/subscribers", AllSubscribers);

module.exports = SubscriberRouter;
