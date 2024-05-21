import { z } from "zod";

export const schema = z.object({
  content: z
    .string()
    .min(3, "Minimum 3 characters")
    .max(1000, "Maximum 1000 characters"),
  image: z.custom<File>(),
});
