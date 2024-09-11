import express from "express"
import { authRouter } from "./router/auth.router.js";
import cookieParser from "cookie-parser"
import { orderRouter } from "./router/order.router.js";
import { contestRouter } from "./router/contest.router.js";
import { Submitionrouter } from "./router/submition.router.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors())

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/orders", orderRouter)
app.use("/api/v1/contest", contestRouter)
app.use("/api/v1/submition", Submitionrouter)

app.get("/api/v1/health", (req, res) => {
  res.json({ msg: "Server is up" })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`${Date.now()} Server is up at ${process.env.PORT || 3000}`)
})
