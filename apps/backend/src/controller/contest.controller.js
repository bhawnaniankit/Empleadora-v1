import { contestCreateSchema } from "@repo/schemas/contest"
import prisma from "@repo/db/client"

export const createContest = async (req, res) => {
  try {
    const payload = req.body;
    const parsedPayload = contestCreateSchema.safeParse(payload);

    if (!parsedPayload.success) {
      return res.status(400).json({ error: parsedPayload.error.errors })
    }

    try {
      const contest = await prisma.contest.create({
        data: {
          title: payload.title,
          description: payload.description,
          clientId: res.userId
        }
      })

      return res.json(contest)

    }
    catch (e) {
      console.log("Error in createContest route\n", e);
      return res.status(500).json({ error: "DB might be down" })
    }
  } catch (e) {
    console.log("Error in createContest route\n", e);
    return res.status(500).json({ error: "Internal Server Error" })
  }
}

export const getAllContest = async (req, res) => {
  try {
    const contest = await prisma.contest.findMany();
    res.json({ contests: contest });
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" })
  }
}
