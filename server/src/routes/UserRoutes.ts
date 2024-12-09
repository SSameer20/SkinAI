import express, { Router, Request, Response } from "express";
import { UserLogin, UserRegister } from "../controller/UserController";

const UserRouter: Router = express.Router();

// User login route
UserRouter.post("/login", UserLogin);

// User registration route
UserRouter.post("/register", UserRegister);

export default UserRouter;
