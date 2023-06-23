import express from "express";
import * as insertController from "../controllers/insert";

const routes = express.Router();

routes.post("/", insertController.insert);

export default routes;
