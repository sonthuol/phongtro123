import express from "express";
import * as authController from "../controllers/auth";

const routes = express.Router();

// Register
routes.post("/register", authController.register);

// Login
routes.post("/login", authController.login);

export default routes;
