const express = require("express");
const { Router } = express;
const { UserModel } = require("../models/UserModel");
const { UserLogin, UserRegister } = require("../controller/UserController");
const JWT = require("jsonwebtoken");
// const userAuth = require("../auth/userAuth");

const UserRouter = Router();

UserRouter.post("/login", UserLogin);
UserRouter.post("/register", UserRegister);

module.exports = UserRouter;
