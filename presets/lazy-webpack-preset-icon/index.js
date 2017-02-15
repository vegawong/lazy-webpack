const resolver = require('lazy-webpack-preset-utils').resolve;

module.exports = function (opt = {}) {
  const limit = opt.limit || 10000;
  return {
    module: {
      rules: [{
        test: /\.woff(\?.*)?$/,
        use: {
          loader: resolver.resolveLoader('url-loader', __dirname),
          query: {
            limit,
            minetype: 'application/font-woff'
          }
        }
      }, {
        test: /\.woff2(\?.*)?$/,
        use: {
          loader: resolver.resolveLoader('url-loader', __dirname),
          query: {
            limit,
            minetype: 'application/font-woff'
          }
        }
      }, {
        test: /\.ttf(\?.*)?$/,
        use: {
          loader: resolver.resolveLoader('url-loader', __dirname),
          query: {
            limit,
            minetype: 'application/octet-stream'
          }
        }
      }, {
        test: /\.eot(\?.*)?$/,
        loader: resolver.resolveLoader('file-loader', __dirname)
      }, {
        test: /\.svg(\?.*)?$/,
        use: {
          loader: resolver.resolveLoader('url-loader', __dirname),
          query: {
            limit,
            minetype: 'application/svg+xml'
          }
        }
      }]
    }
  };
};
