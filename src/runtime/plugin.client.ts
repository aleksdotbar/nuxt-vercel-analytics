import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { inject } from "@vercel/analytics";

export default defineNuxtPlugin(() => {
  const {
    public: { vercelAnalytics: options },
  } = useRuntimeConfig();

  inject(options);
});
