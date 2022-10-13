# Next Netlify Example

Simplified project setup that reproduces the following Netlify CLI issue https://github.com/netlify/cli/issues/5030

- Issue can be reproduced for Netlify CLI 11+
- Issue does NOT occur while using Netlify CLI 10.18.0

At the time of writing, issue occurs while using the latest Next.js and @netlify/plugin-nextjs releases.

## Setup

If you have `nvm` installed, you can switch to Node v16.17.0 with

```
nvm use
```

Globally install the latest Netlify CLI 12.x

```
npm i -g netlify-cli@12
```

Then run:

```
yarn install
```

Followed by:

```
netlify dev --debug
```

Visiting http://localhost:8888 will immediately trigger a GET request to a test Netlify function.

The test function will print the full `event` object in the console.

Note: Netlify function handler adjustments will require restarting netlify dev.

## Other Background

This project was scaffolded using `yarn create next-app --typescript`
