const os = require('os');

const loaderResolve = loader => {
  if (process.env.lazy_webpack_debug) {
    return require.resolve(loader);
  }
  return loader;
};

const babelPresetResolve = preset => {
  if (process.env.lazy_webpack_debug) {
    return require.resolve(`babel-preset-${preset}`);
  }
  return preset;
};


module.exports = function (opt = {}) {
  return {
    module: {
      rules: [{
        test: /\.(jsx?|es6)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: loaderResolve('babel-loader'),
          options: opt.options || opt.query || {
            babelrc: false,
            cacheDirectory: os.tmpdir(),
            presets: [[
              babelPresetResolve('es2015'), {
                modules: false
              }
            ]]
          }
        }]
      }]
    }
  };
};

