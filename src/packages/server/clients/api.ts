import { api } from "@/packages/server/contracts";
import { initQueryClient } from "@ts-rest/react-query";

export const client = initQueryClient(api, {
  baseUrl: "/api",
  baseHeaders: {},
});
