// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
// eslint-disable-next-line import/no-unresolved, import/extensions
const config = require('./webpack.config.js');

const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});