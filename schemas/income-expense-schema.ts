import { z } from "zod";

export const schema = z.object({
  title: z.string({ message: "Title is required" }),
  description: z
    .string()
    .max(200, { message: "Description must be at most 200 characters" })
    .optional(),
  amount: z.coerce.number({ message: "Amount is required" }),
  category: z.string({ message: "Category is required" }),
});

export type FormFields = z.infer<typeof schema>;
