import express from "express";
import * as authController from "../controllers/auth";

const routes = express.Router();

routes.post("/register", authController.register);

export default routes;
