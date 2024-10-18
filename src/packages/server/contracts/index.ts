import { healthContract } from "@/packages/server/modules/health/health.contract";
import { initContract } from "@ts-rest/core";

const contract = initContract();

const api = contract.router({
  health: healthContract,
});

export { api };
