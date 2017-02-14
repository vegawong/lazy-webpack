const getConfig = require('../../index');
const plugins = require('../../plugins');
// const webpack = require('webpack');

const config = getConfig({
  in: {
    app: 'src/index.js'
  },
  out: {
    path: 'dist',
    publicPath: 'http://localhost:3000/dist/'
  },
  isDev: true,
  devServer: {
    // autoOpen: true
  }
});

config.plugins.push(new plugins.BuildHtmlPlugin({
  tplPath: './outTpl',
  outPath: './'
}));

// config.plugins.push(new webpack.HotModuleReplacementPlugin());


module.exports = config;
