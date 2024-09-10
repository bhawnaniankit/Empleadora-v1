import { clientSignupSchema } from "@repo/schemas/clientSignup"
import prisma from "@repo/db/client"

export const clientSignupController = (req, res) => {
  const payload = req.body;
  const parsedPayload = clientSignupSchema.safeParse(payload);
  if (!parsedPayload.success) {
    return res.status(400).json({ error: parsedPayload.error.errors })
  }
}
