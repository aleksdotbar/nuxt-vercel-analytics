import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { defu } from "defu";
import type { inject } from "@vercel/analytics";

type AnalyticsProps = Exclude<Parameters<typeof inject>[0], undefined>;

export interface ModuleOptions {
  /**
   * Override the automatic environment detection.
   * This option allows you to force a specific environment for the package.
   * @default 'auto'
   */
  mode?: AnalyticsProps["mode"];

  /**
   * You'll see all analytics events in the browser's console with the debug mode.
   * This option is automatically enabled if the NODE_ENV environment variable is available and is either development or test.
   */
  debug?: AnalyticsProps["debug"];

  /**
   * With the beforeSend option, you can modify the event data before it's sent to Vercel.
   * Returning null will ignore the event and no data will be sent.
   */
  beforeSend?: AnalyticsProps["beforeSend"];
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-vercel-analytics",
    configKey: "vercelAnalytics",
  },
  defaults: {},
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.vercelAnalytics = defu(
      nuxt.options.runtimeConfig.public.vercelAnalytics,
      options
    );

    const { resolve } = createResolver(import.meta.url);

    addPlugin({
      src: resolve("./runtime/plugin.client"),
      mode: "client",
    });
  },
});
