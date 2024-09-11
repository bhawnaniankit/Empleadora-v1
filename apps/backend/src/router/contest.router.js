import { Router } from "express";
import { cliientLoggedIn, lancerLoggedIn } from "../middleware/auth.middleware.js";
import { createContest, getAllContest } from "../controller/contest.controller.js";
import prisma from "@repo/db/client";

export const contestRouter = Router();

contestRouter.post("/create", createContest);
contestRouter.get("/all", getAllContest);
contestRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const contest = prisma.contest.findFirst({
    where: {
      id: id
    },
    select: {
      title: true,
      description: true,
      submitions: true
    }
  })

  res.json(contest)
})
