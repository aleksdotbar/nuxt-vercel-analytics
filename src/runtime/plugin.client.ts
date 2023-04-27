import { defineNuxtPlugin, useAppConfig } from "#app";
import { inject } from "@vercel/analytics";

export default defineNuxtPlugin(() => {
  const config = useAppConfig();

  inject(config.vercelAnalytics);
});
