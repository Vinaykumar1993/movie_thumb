This project was bootstrapped with [@enact/cli](https://github.com/enactjs/cli).

Below you will find some information on how to perform common tasks.
You can find the most recent version of this guide [here](https://github.com/enactjs/templates/blob/master/packages/webostv/template/README.md).
Additional documentation on @enact/cli can be found [here](https://github.com/enactjs/cli/blob/master/docs/index.md).

## Movie Cards

## Available Scripts

In the project directory, you can run:

### `npm run serve`

Builds and serves the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run pack` and `npm run pack-p`

Builds the project in the working directory. Specifically, `pack` builds in development mode with code un-minified and with debug code included, whereas `pack-p` builds in production mode, with everything minified and optimized for performance. Be sure to avoid shipping or performance testing on development mode builds.

### `npm run watch`

Builds the project in development mode and keeps watch over the project directory. Whenever files are changed, added, or deleted, the project will automatically get rebuilt using an active shared cache to speed up the process. This is similar to the `serve` task, but without the http server.

### `npm run clean`

Deletes previous build fragments from ./dist.

### `npm run lint`

Runs the Enact configuration of Eslint on the project for syntax analysis.

### `npm run test` and `npm run test-watch`

These tasks will execute all valid tests (files that end in `-specs.js`) that are within the project directory. The `test` is a standard single execution pass, while `test-watch` will set up a watcher to re-execute tests when files change.
