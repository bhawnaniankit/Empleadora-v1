import { Router } from "express";
import { clientSignupController, clientLoginController, clientLogOutController } from "../controller/auth.controller.js";

export const authRouter = Router();

authRouter.post("/client/signup", clientSignupController);
authRouter.post("/client/signin", clientLoginController);
authRouter.post("/client/logout", clientLogOutController);
