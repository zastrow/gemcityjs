const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: PRODUCTION ? false : 'eval-source-map',
  mode: PRODUCTION ? 'production' : 'development',
};
