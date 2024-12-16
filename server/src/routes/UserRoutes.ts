import express, { Router, Request, Response } from "express";
import {
  UserLogin,
  UserRegister,
  UserDetails,
} from "../controller/UserController";
import { UserMiddleware } from "../middleware/userMiddleware";

const UserRouter: Router = express.Router();

// User login route
UserRouter.post("/login", UserLogin);
UserRouter.post("/register", UserRegister);
UserRouter.post("/details", UserMiddleware, UserDetails);

export default UserRouter;
