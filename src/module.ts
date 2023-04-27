import {
  defineNuxtModule,
  addPlugin,
  addImports,
  createResolver,
} from "@nuxt/kit";
import type { inject } from "@vercel/analytics";

type AnalyticsProps = Exclude<Parameters<typeof inject>[0], undefined>;

interface ModuleOptions {
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

export default defineNuxtModule({
  meta: {
    name: "nuxt-vercel-analytics",
  },
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addPlugin({
      src: resolve("./runtime/plugin.client"),
      mode: "client",
    });

    addImports({
      from: "@vercel/analytics",
      name: "track",
      as: "vercelTrack",
    });

    nuxt.hook("schema:extend", (schemas) => {
      schemas.push({
        appConfig: {
          vercelAnalytics: {},
        },
      });
    });
  },
});
