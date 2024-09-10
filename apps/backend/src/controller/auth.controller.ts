import { Request, Response } from "express";
import { clientSignupSchema } from "@repo/schemas/clientSignup"
import prisma from "@repo/db/client"

export const clientSignupController = (req: Request, res: Response) => {
  const payload = req.body;
  const parsedPayload = clientSignupSchema.safeParse(payload);
  if (!parsedPayload.success) {
    return res.status(400).json({ error: parsedPayload.error.errors })
  }
}
