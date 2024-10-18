import { createNextRoute, createNextRouter } from "@ts-rest/next";
import { api } from "@/packages/server/contracts";
import { healthRouter } from "@/packages/server/modules/health/health.controller";

const router = createNextRoute(api, {
  health: healthRouter,
});

export default createNextRouter(api, router);
