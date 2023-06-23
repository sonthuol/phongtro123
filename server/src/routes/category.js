import express from "express";
import * as categoryController from "../controllers/category";

const routes = express.Router();

routes.get("/", categoryController.getCategories);

export default routes;
