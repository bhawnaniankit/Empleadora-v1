import { z } from "zod";

export const contestCreateSchema = z.object({
  title: z.string(),
  description: z.string()
})
