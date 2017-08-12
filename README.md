# optimize-localIdentName

Project created to experiment how `localIdentName` setting for [css-loader](https://github.com/webpack-contrib/css-loader) can influence overall build size.

|                 | default [hash:base64]    | [hash:base64:12] | [name]-[hash:base64:5] | [local]-[hash:base64:5] |
|-----------------|--------------------------|------------------|------------------------|-------------------------|
| css + js        | 327 (78 + 249)           | 308 (68 + 240)   | 300 (64 + 236)         | 330 (79 + 251)          |
| css + js (gzip) | 107 (28 + 79)            | 91 (20 + 71)     | 81 (15 + 66)           | 92 (23 + 69)            |

Those results poof only that `localIdentName` has significant influence on the build size, not that `[name]-[hash:base64:5]` is the best config. Experiment with your project and test the outcome.

* **Interested in optimizing build size?** Read the full story: [Optimize React build for production](https://michalzalecki.com/optimize-react-build-for-production-with-webpack/)
* **Do you like the setup?** Check out: [react-boilerplate-lite](https://github.com/MichalZalecki/react-boilerplate-lite)

## Generate

Play with `generate.js` to manipulate how classes are generated.

```
node generate.js
```

## Installation

```
git clone --depth 1 https://github.com/MichalZalecki/react-boilerplate-lite project
cd project
cp .env-example .env
npm install
```

## Usage

```
npm start                   # start server
npm run start:dashboard     # start server using webpack-dashboard
npm run build               # production build (remember to build with NODE_ENV=production)
```
