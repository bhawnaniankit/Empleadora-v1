import prisma from "@repo/db/client";
import { submitionSchema } from "@repo/schemas/submition"

export const submitSubmition = async (req, res) => {
  try {
    const payload = req.body;
    const parsedPayload = submitionSchema.safeParse(payload);

    if (!parsedPayload.success) {
      return res.status(400).json({ error: parsedPayload.error.errors });
    }

    try {
      const submition = await prisma.submition.create({
        data: {
          freelancerId: req.userId,
          submitionUrl: payload.submitionUrl,
          contestId: payload.contestId
        }
      })

      res.json(submition)

    }
    catch (e) {
      console.log(e);
      return res.status(400).json({ error: "DB might be down" })
    }

  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" })

  }
}


export const getAllSubmitions = async (req, res) => {
  try {
    const submitions = await prisma.submition.findMany({
      where: {
        contest: {
          clientId: req.userId
        }
      }
    })

    res.json({ submitions: submitions });

  }
  catch (e) {
    console.log(e);
    res.status(500).json({ "error": "Internal Server Error" })
  }
}
