<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt Vercel Analytics
- Package name: nuxt-vercel-analytics
- Description: Nuxt module to integrate Vercel Analytics
-->

# Nuxt Vercel Analytics

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> [Vercel Web Analytics](https://vercel.com/docs/concepts/analytics) integration for Nuxt

## Features

- Zero-config
- Auto-imported `track` function aliased as `vercelTrack`

## Setup

1. Add `nuxt-vercel-analytics` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-vercel-analytics

# Using yarn
yarn add --dev nuxt-vercel-analytics

# Using npm
npm install --save-dev nuxt-vercel-analytics
```

2. Add `nuxt-vercel-analytics` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-vercel-analytics"],
});
```

That's it! Vercel Analytics is now integrated in your Nuxt app ✨

## Configuration

```js
// app.config.ts
export default defineAppConfig({
  vercelAnalytics: {
    mode: "auto",
    debug: true,
    beforeSend: (event) => {
      if (event.url.includes("/private")) return null;

      return event;
    },
  },
});
```

## Custom Events

To track an event, call `vercelTrack` and pass in a string representing the event name as the first argument

```js
const onSignup = () => {
  vercelTrack("Signup");
  // ...other logic
};
```

### Custom data

You can also pass custom data along with an event by passing an object as the second argument

```js
const onSignup = () => {
  vercelTrack("Signup", { location: "footer" });
  // ...other logic
};
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-vercel-analytics/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-vercel-analytics
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-vercel-analytics.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-vercel-analytics
[license-src]: https://img.shields.io/npm/l/nuxt-vercel-analytics.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-vercel-analytics
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
