import { z } from "zod";

export const submitionSchema = z.object({
  contestId: z.string(),
  submitionUrl: z.string()
})
