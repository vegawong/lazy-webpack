const os = require('os');

module.exports = function (opt = {}) {
  return {
    module: {
      rules: [{
        test: /\.(jsx?|es6)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: opt.options || opt.query || {
            babelrc: false,
            cacheDirectory: os.tmpdir(),
            presets: [[
              'es2015', {
                modules: false
              }
            ]]
          }
        }]
      }]
    }
  };
};

