import { initContract } from "@ts-rest/core";
import { string, z } from "zod";

export const healthContract = initContract().router({
  check: {
    method: "GET",
    path: "/health",
    responses: {
      200: z.object({ message: string() }),
    },
  },
});
