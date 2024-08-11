import { z } from "zod";

export const schema = z.object({
  currency: z.string(),
});

export type FormFields = z.infer<typeof schema>;
