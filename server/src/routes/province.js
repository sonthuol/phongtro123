import express from "express";
import * as provinceController from "../controllers/province";

const routes = express.Router();

routes.get("/", provinceController.getProvinces);

export default routes;
