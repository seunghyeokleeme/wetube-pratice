import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getjoin,
  login,
  logout,
  postjoin
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getjoin);
globalRouter.post(routes.join, postjoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
