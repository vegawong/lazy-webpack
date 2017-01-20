const getConfig = require('../../index');

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


module.exports = config;
