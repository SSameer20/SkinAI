const express = require("express");
const { Router } = express;
const { SubscriberRegister } = require("../controller/SubscriberController");

const SubscriberRouter = Router();

SubscriberRouter.post("/register", SubscriberRegister);

module.exports = SubscriberRouter;
