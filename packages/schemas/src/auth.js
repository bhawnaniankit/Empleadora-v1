import { z } from "zod";

export const clientSignupSchema = z.object({
  name: z.string({ message: "String expected" }).min(1, { message: "Please Enter name" }),
  username: z.string({ message: "String expected" }).min(8, { message: "Username must have atleast 8 characters" }),
  password: z.string({ message: "String expected" }).min(8, { message: "Password must have 8 characters" }),
  email: z.string({ message: "String expected" }).email({ message: "Invalid Email" })
})

export const clientLoginSchema = z.object({
  username: z.string({ message: "String expected" }).min(8, { message: "Username must have atleast 8 characters" }),
  password: z.string({ message: "String expected" }).min(8, { message: "Password must have 8 characters" }),
})
