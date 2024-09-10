import { clientSignupSchema, clientLoginSchema } from "@repo/schemas/clientSignup"
import prisma from "@repo/db/client"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const clientSignupController = async (req, res) => {

  try {
    const payload = req.body;
    const parsedPayload = clientSignupSchema.safeParse(payload);
    if (!parsedPayload.success) {
      return res.status(400).json({ error: parsedPayload.error.errors })
    }

    let existingUser;
    try {
      existingUser = await prisma.client.findFirst({
        where: {
          OR: [{
            username: payload.username
          },
          {
            email: payload.email
          }]
        }
      })
    }
    catch (e) {
      console.log(e)
      res.status(400).json("Database is down")
    }

    if (existingUser) {
      return res.status(409).json({ error: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(payload.password, process.env.SALT_ROUND || 10);

    let user;
    try {

      user = await prisma.client.create({
        data: {
          name: payload.name,
          email: payload.email,
          username: payload.username,
          password: hashedPassword
        }
      })
    }
    catch (e) {
      //todo check erro instance
      console.log(e);
      return res.json({ msg: "DB is down" })
    }

    const token = jwt.sign({
      id: user.id
    }, process.env.JWT_SECRET || "secret")


    res.cookie("token", token, { maxAge: 86400 * 1000 });
    res.send();
  }
  catch (e) {
    console.log("error at client signup route\n", e);
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const clientLoginController = async (req, res) => {
  try {
    const payload = req.body;
    const parsedPayload = clientLoginSchema.safeParse(payload);
    if (!parsedPayload.success) {
      return res.status(400).json({ error: parsedPayload.error.errors })
    }


    let user = null;
    try {
      user = await prisma.client.findFirst({
        where: {
          username: payload.username
        }
      })
    }
    catch (e) {
      //check error isntance
      return res.json();
    }


    if (!user) {
      return res.status(401).json({ error: "Account not found" });
    }

    const isCorrectPassword = await bcrypt.compare(payload.password, user.password);
    console.log(isCorrectPassword)

    if (!isCorrectPassword) {
      return res.status(401).json({ error: "Credentials did'nt match" })
    }

    const token = jwt.sign({
      id: user.id
    }, process.env.JWT_SECRET || "secret")


    res.cookie("token", token, { maxAge: 86400 * 1000 });
    res.send();
  }
  catch (e) {
    console.log("error at client signup route\n", e);
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const clientLogOutController = (_req, res) => {
  res.cookie("token", "", { maxAge: 0 });
  res.send()
}
