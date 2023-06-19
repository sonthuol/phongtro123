import express from "express";

const routes = express.Router();

routes.get("/login", (req, res) => {
  return res.status(200).json("oki");
});

export default routes;
