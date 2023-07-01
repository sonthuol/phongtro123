import express from "express";
import * as acreageController from "../controllers/acreage";

const routes = express.Router();

routes.get("/", acreageController.getAcreages);

export default routes;
