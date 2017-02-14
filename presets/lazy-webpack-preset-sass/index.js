const ExtractTextPlugin = require('extract-text-webpack-plugin');


const getPostCssLoader = function (plugins) {
  return {
    loader: 'postcss-loader',
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
          use: ['style-loader', 'css-loader', postcssLoader, 'sass-loader']
        }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', postcssLoader]
        }]
      }

    };
  }
  return {
    module: {
      rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', postcssLoader, 'sass-loader']
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', postcssLoader]
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  };
};
