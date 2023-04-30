import {
  defineNuxtModule,
  addPlugin,
  addImports,
  createResolver,
} from "@nuxt/kit";
import type { inject } from "@vercel/analytics";

export default defineNuxtModule({
  meta: {
    name: "nuxt-vercel-analytics",
  },
  setup() {
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
  },
});

type Options = NonNullable<Parameters<typeof inject>[0]>;

declare module "@nuxt/schema" {
  interface CustomAppConfig {
    vercelAnalytics?: {
      /**
       * Override the automatic environment detection.
       * This option allows you to force a specific environment for the package.
       * @default 'auto'
       */
      mode?: Options["mode"];

      /**
       * You'll see all analytics events in the browser's console with the debug mode.
       * This option is automatically enabled if the NODE_ENV environment variable is available and is either development or test.
       */
      debug?: Options["debug"];

      /**
       * With the beforeSend option, you can modify the event data before it's sent to Vercel.
       * Returning null will ignore the event and no data will be sent.
       */
      beforeSend?: Options["beforeSend"];
    };
  }
}
