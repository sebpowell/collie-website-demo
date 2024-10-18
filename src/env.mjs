import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  skipValidation: process.env.NODE_ENV === "test" || process.env.CI != "",
  server: {
    CONTENTFUL_SPACE_ID: z.string(),
    CONTENTFUL_CONTENT_API_TOKEN: z.string(),
  },
});
