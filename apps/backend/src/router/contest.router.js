import { Router } from "express";
import { cliientLoggedIn, lancerLoggedIn } from "../middleware/auth.middleware.js";
import { createContest, getAllContest } from "../controller/contest.controller.js";

export const contestRouter = Router();

contestRouter.post("/create", cliientLoggedIn, createContest);
contestRouter.get("/all", lancerLoggedIn, getAllContest);
