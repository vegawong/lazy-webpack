const ExtractTextPlugin = require('extract-text-webpack-plugin');

const loaderResolve = loader => {
  if (process.env.lazy_webpack_debug) {
    return require.resolve(loader);
  }
  return loader;
};

const getPostCssLoader = function (plugins) {
  return {
    loader: loaderResolve('postcss-loader'),
    options: {
      plugins() {
        return plugins || [];
      }
    }
  };
};


module.exports = function (opt = {}) {
  const postcssLoader = getPostCssLoader(opt.postcss);
  if (!opt.extract) {
    return {
      module: {
        rules: [{
          test: /\.scss$/,
          use: [loaderResolve('style-loader'), loaderResolve('css-loader'), postcssLoader, loaderResolve('sass-loader')]
        }, {
          test: /\.css$/,
          use: [loaderResolve('style-loader'), loaderResolve('css-loader'), postcssLoader]
        }]
      }

    };
  }
  return {
    module: {
      rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: loaderResolve('style-loader'),
          use: [loaderResolve('css-loader'), postcssLoader, loaderResolve('sass-loader')]
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: loaderResolve('style-loader'),
          use: [loaderResolve('css-loader'), postcssLoader]
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin(opt.hash ? '[name]-[contenthash].css' : '[name].css')
    ]
  };
};
