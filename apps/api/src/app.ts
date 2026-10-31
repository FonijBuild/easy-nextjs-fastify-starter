import { healthResponseSchema } from "@repo/shared";
import Fastify from "fastify";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.get("/health", async () => {
    return healthResponseSchema.parse({
      status: "ok",
      service: "api",
    });
  });

  return app;
}
