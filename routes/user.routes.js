import express from "express";
import {authMiddleware} from '../middleware/auth.middleware.js'
import {
  profileController,
  registerController,
  loginController,
} from "../controllers/user.controller.js";
const routes = express.Router();

routes.post("/profile",authMiddleware, profileController);
routes.post("/login", loginController);
routes.post("/register", registerController);

export default routes;
