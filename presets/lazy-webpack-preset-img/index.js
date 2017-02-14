
module.exports = function (opt = {}) {
  const limit = opt.limit || 10000;
  return {
    rules: [{
      test: /\.(png|jpg|jpeg|gif)(\?.*)?$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit
        }
      }]
    }]
  };
};