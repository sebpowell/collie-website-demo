import { logger } from "@/packages/server/clients/logger";
import { api } from "@/packages/server/contracts";
import { createNextRoute } from "@ts-rest/next";

const healthRouter = createNextRoute(api.health, {
  check: async () => {
    logger.info("Health check: ok");

    return {
      status: 200,
      body: {
        message: "Hello world",
      },
    };
  },
});

export { healthRouter };
