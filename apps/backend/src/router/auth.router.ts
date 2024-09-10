import { Router } from "express";
import { clientSignupController } from "../controller/auth.controller";

export const authRouter = Router();

authRouter.post("/client/signup", clientSignupController)
