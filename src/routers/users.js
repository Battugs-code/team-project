import { Router, Router } from "express";
import {
  sighUpControllers,
  sighInService,
  getUserControllers,
} from "../controllers/users/controllers";
export const userRouter = Router();

userRouter.post("/sighup ", sighUpControllers);
userRouter.post("/sighin ", sighInService);
userRouter, get("/me", getUserControllers);
