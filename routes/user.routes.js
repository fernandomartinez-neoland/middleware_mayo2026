import express from "express";
import {
  profileController,
  registerController,
  loginController,
} from "../controllers/user.controller.js";
const routes = express.Router();

routes.post("/profile", profileController);
routes.post("/login", loginController);
routes.post("/register", registerController);

export default routes;
