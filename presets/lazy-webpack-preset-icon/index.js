
module.exports = function (opt = {}) {
  const limit = opt.limit || 10000;
  return {
    module: {
      rules: [{
        test: /\.woff(\?.*)?$/,
        loader: `url-loader?limit=${limit}&minetype=application/font-woff`
      }, {
        test: /\.woff2(\?.*)?$/,
        loader: `url-loader?limit=${limit}&minetype=application/font-woff`
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: `url-loader?limit=${limit}&minetype=application/octet-stream`
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file'
      }, {
        test: /\.svg(\?.*)?$/,
        loader: `url-loader?limit=${limit}&minetype=image/svg+xml`
      }]
    }
  };
};
