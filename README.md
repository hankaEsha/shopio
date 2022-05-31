### shopio
# New Shopio e-shop (demoversion) responsive home-page created basing on a proveded graphic design delivered in Adobe XD.

-   **Gulp 4**: task runner for running all of the following
-   **Sass compilation**: leverage the power of the most popular CSS extension language
-   **Sourcemaps** generation for easier Sass debugging
-   **Browsersync**: automatically reloads (or injects in case of CSS), browsers when you change files
-   **Autoprefixer**: parses CSS and adds vendor prefixes according to [caniuse.com]()
-   **UnCSS**: removes unused styles from CSS
-   **CSSO**: CSS minifier with structural optimizations
-   **Splide**: Javascript framework for slider/carousel written in TypeScript

## First time installation

### Install latest [node.js](https://nodejs.org/)

### Install all packages from `package.json` locally

```shell
npm install
```

_If you’re having errors with `node-gyp`, try [installing it globally](https://github.com/nodejs/node-gyp#installation)._

## Development

To develop with automatic compilation and browser refreshing run

```shell
npm start
```

And see the result on `http://localhost:3000/`


## CSS (Sass preprocessor)

`index.css` (and other `*.css`) files are compiled from `src/index.scss` by [Sass](http://sass-lang.com/).

## Static files (JavaScript, images, …)

Folders and files from `/src/` are simply copied directly to `/dist/` folder.

## Deployment

```shell
npm run deploy
```