import { Router } from "express";
import { clientSignupController } from "../controller/auth.controller.js";

export const authRouter = Router();

authRouter.post("/client/signup", clientSignupController)
