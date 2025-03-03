import express, { Router } from "express";
import {
  SubscriberRegister,
  AllSubscribers,
} from "../controller/SubscriberController";

const SubscriberRouter: Router = express.Router();

/**
 * Route for registering a subscriber.
 * Endpoint: POST /register
 */
SubscriberRouter.post("/register", SubscriberRegister);

/**
 * Route for fetching all subscribers.
 * Endpoint: GET /subscribers
 */
SubscriberRouter.get("/subscribers", AllSubscribers);

export default SubscriberRouter;
