import express from "express";
import * as postController from "../controllers/post";

const routes = express.Router();

routes.get("/", postController.getPosts);

export default routes;
