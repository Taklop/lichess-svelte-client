# lichess-svelte-client

## Personal Token

To get started, you will need to place your own personal token inside the `./data/userData.ts` file.

## Types

The types are generated from the `lichess-openapi-spec.json` file. They can be updated with:

`npx openapi-typescript-codegen --input swagger.json --output ./dist`

## Building

Svelte apps are built with _adapters_, which optimise your project for deployment to different environments, like [Begin](https://begin.com), [Netlify](https://www.netlify.com), [Vercel](https://vercel.com) and so on. (You can also create your own adapter — instructions TODO.)

By default, `npm run build` will generate a Node app that you can run with `node build`. To use a different adapter, install it and update your `svelte.config.js` accordingly. The following official adapters are available:

-   [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/master/packages/adapter-node)
-   [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
-   [@sveltejs/adapter-netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
-   ...more soon
