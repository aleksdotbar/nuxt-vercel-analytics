![Nuxt Vercel Analytics](https://raw.githubusercontent.com/xanderbarkhatov/nuxt-vercel-analytics/main/docs/cover.png)

# Nuxt Vercel Analytics

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> [Vercel Analytics](https://vercel.com/docs/concepts/analytics) integration for Nuxt

## 📝 Features

- 🚀 Zero-config
- 📥 Auto-imports

## 🔧 Setup

1. Add `nuxt-vercel-analytics` dependency to your project

```bash
npx nuxi@latest module add vercel-analytics
```

2. Add `nuxt-vercel-analytics` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-vercel-analytics"],
});
```

That's it! Vercel Analytics is now integrated in your Nuxt app ✨

## ⚙️ Configuration

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

## 📈 Custom Events

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

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-vercel-analytics/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-vercel-analytics
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-vercel-analytics.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-vercel-analytics
[license-src]: https://img.shields.io/npm/l/nuxt-vercel-analytics.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-vercel-analytics
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
