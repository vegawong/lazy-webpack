const getConfig = require('../../index');

const conf = getConfig({
  in: 'src/index.js',
  out: {
    path: 'dist',
    publicPath: 'http://localhost:3000/dist'
  },
  isDev: true,
  devServer: {
    // verbose: true
    // port: 4000,
    // autoOpen: true
  }
});

module.exports = conf;
