import prisma from "@repo/db/client";
import jwt from "jsonwebtoken"

export const cliientLoggedIn = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET || "secret");
      try {
        const user = prisma.client.findFirst({
          where: {
            id: id
          }
        })

        if (!user) {
          return res.status(401).json({ error: "Unauthorized" });
        }
        res.userId = id;
        next();
      }
      catch (e) {
        console.log(e)
        return res.status(400).json({ error: "DB might be down" })
      }
    }
    catch (e) {
      return res.status(401).json({ error: "Unauthorized" });
    }


  }
  catch (e) {
    console.log("Error at client auth middleware\n", e);
    res.status(500).json({ error: "Internal server error" });
  }
}

export const lancerLoggedIn = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET || "secret");
      try {
        const user = prisma.freelancer.findFirst({
          where: {
            id: id
          }
        })

        if (!user) {
          return res.status(401).json({ error: "Unauthorized" });
        }
        res.userId = id;
        next();
      }
      catch (e) {
        console.log(e)
        return res.status(400).json({ error: "DB might be down" })
      }
    }
    catch (e) {
      return res.status(401).json({ error: "Unauthorized" });
    }


  }
  catch (e) {
    console.log("Error at client auth middleware\n", e);
    res.status(500).json({ error: "Internal server error" });
  }
}
