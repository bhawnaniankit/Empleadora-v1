import { Router } from "express";
import { cliientLoggedIn, lancerLoggedIn } from "../middleware/auth.middleware.js";
import { submitSubmition } from "../controller/submition.controller.js";

export const Submitionrouter = Router();

Submitionrouter.post("/submit", lancerLoggedIn, submitSubmition)
Submitionrouter.get("/getAll", cliientLoggedIn,)
