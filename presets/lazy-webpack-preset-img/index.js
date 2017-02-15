
const resolver = require('lazy-webpack-preset-utils').resolve;

module.exports = function (opt = {}) {
  const limit = opt.limit || 10000;
  return {
    module: {
      rules: [{
        test: /\.(png|jpg|jpeg|gif)(\?.*)?$/i,
        use: [{
          loader: resolver.resolveLoader('url-loader'),
          options: {
            limit
          }
        }]
      }]
    }
  };
};
