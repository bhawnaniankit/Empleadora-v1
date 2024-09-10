import express from "express"
import { authRouter } from "./router/auth.router";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter)

app.get("/api/v1/health", (req, res) => {
  res.json({ msg: "Server is up" })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`${Date.now()} Server is up at ${process.env.PORT || 3000}`)
})
