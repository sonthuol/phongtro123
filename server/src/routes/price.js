import express from "express";
import * as priceController from "../controllers/price";

const routes = express.Router();

routes.get("/", priceController.getPrices);

export default routes;
