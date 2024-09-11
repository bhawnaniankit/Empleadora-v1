import { Router } from "express";
import { cliientLoggedIn, lancerLoggedIn } from "../middleware/auth.middleware";
import { submitSubmition } from "../controller/submition.controller";

export const Submitionrouter = Router();

Submitionrouter.post("/submit", lancerLoggedIn, submitSubmition)
Submitionrouter.get("/getAll", cliientLoggedIn,)
